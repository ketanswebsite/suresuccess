import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Types matching your existing Firestore schema ───

export interface Module {
  id: string;
  title: string;
  description: string;
  examId: string;
  isPremium: boolean;
  order: number;
  price: number;
  salePrice: number;
  currency: string;
  questionCount: number;
  purchaseCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Exam {
  id: string;
  title: string;
  body: string; // "CISI" or "CII"
  code: string;
  description: string;
  totalModules: number;
  createdAt: Timestamp;
}

export interface Question {
  id: string;
  moduleId: string;
  chapterId: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: string;
}

export interface Chapter {
  id: string;
  moduleId: string;
  title: string;
  order: number;
  questionCount: number;
}

export interface Topic {
  id: string;
  chapterId: string;
  moduleId: string;
  title: string;
  order: number;
}

export interface TestResult {
  id: string;
  userId: string;
  moduleId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpent: number;
  answers: Record<string, number>;
  createdAt: Timestamp;
}

export interface UserProgress {
  id: string;
  userId: string;
  moduleId: string;
  questionsAttempted: number;
  questionsCorrect: number;
  lastStudied: Timestamp;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  createdAt: Timestamp;
  lastLogin: Timestamp;
}

// ─── Data fetching functions ───

export async function getModules(): Promise<Module[]> {
  const snapshot = await getDocs(
    query(collection(db, "modules"), orderBy("order", "asc"))
  );
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Module));
}

export async function getModuleById(id: string): Promise<Module | null> {
  const docRef = doc(db, "modules", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Module;
}

export async function getExams(): Promise<Exam[]> {
  const snapshot = await getDocs(collection(db, "exams"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Exam));
}

export async function getChaptersByModule(moduleId: string): Promise<Chapter[]> {
  const snapshot = await getDocs(
    query(
      collection(db, "chapters"),
      where("moduleId", "==", moduleId),
      orderBy("order", "asc")
    )
  );
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Chapter));
}

export async function getTopicsByChapter(chapterId: string): Promise<Topic[]> {
  const snapshot = await getDocs(
    query(
      collection(db, "topics"),
      where("chapterId", "==", chapterId),
      orderBy("order", "asc")
    )
  );
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Topic));
}

export async function getQuestionsByModule(
  moduleId: string,
  maxQuestions?: number
): Promise<Question[]> {
  let q = query(
    collection(db, "questions"),
    where("moduleId", "==", moduleId)
  );
  if (maxQuestions) {
    q = query(q, limit(maxQuestions));
  }
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Question));
}

export async function getQuestionsByChapter(
  chapterId: string,
  maxQuestions?: number
): Promise<Question[]> {
  let q = query(
    collection(db, "questions"),
    where("chapterId", "==", chapterId)
  );
  if (maxQuestions) {
    q = query(q, limit(maxQuestions));
  }
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Question));
}

// ─── User progress & results ───

export async function getUserProgress(userId: string): Promise<UserProgress[]> {
  const snapshot = await getDocs(
    query(collection(db, "userProgress"), where("userId", "==", userId))
  );
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as UserProgress)
  );
}

export async function getUserTestResults(
  userId: string,
  limitCount = 10
): Promise<TestResult[]> {
  const snapshot = await getDocs(
    query(
      collection(db, "testResults"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    )
  );
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as TestResult)
  );
}

export async function saveTestResult(result: Omit<TestResult, "id" | "createdAt">) {
  return addDoc(collection(db, "testResults"), {
    ...result,
    createdAt: serverTimestamp(),
  });
}

export async function updateUserProgress(
  userId: string,
  moduleId: string,
  questionsAttempted: number,
  questionsCorrect: number
) {
  // Check if progress doc exists
  const snapshot = await getDocs(
    query(
      collection(db, "userProgress"),
      where("userId", "==", userId),
      where("moduleId", "==", moduleId)
    )
  );

  if (snapshot.empty) {
    return addDoc(collection(db, "userProgress"), {
      userId,
      moduleId,
      questionsAttempted,
      questionsCorrect,
      lastStudied: serverTimestamp(),
    });
  } else {
    const existingDoc = snapshot.docs[0];
    const existing = existingDoc.data();
    return updateDoc(doc(db, "userProgress", existingDoc.id), {
      questionsAttempted: existing.questionsAttempted + questionsAttempted,
      questionsCorrect: existing.questionsCorrect + questionsCorrect,
      lastStudied: serverTimestamp(),
    });
  }
}

// ─── User profile ───

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const docRef = doc(db, "users", userId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as UserProfile;
}

export async function logUserActivity(userId: string, action: string, details?: Record<string, unknown>) {
  return addDoc(collection(db, "user_activities"), {
    userId,
    action,
    details: details || {},
    createdAt: serverTimestamp(),
  });
}
