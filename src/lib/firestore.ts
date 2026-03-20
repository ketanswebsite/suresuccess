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
  getFirestore,
} from "firebase/firestore";
import app from "./firebase";

// Lazy-initialized: Firestore SDK only loads when this module is first imported
const db = getFirestore(app);

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

// ─── Gamification Types ───

export interface UserGamification {
  id: string;
  userId: string;
  totalXP: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string; // ISO date string YYYY-MM-DD
  totalCorrect: number;
  totalAnswered: number;
  totalQuizzesCompleted: number;
  perfectQuizzes: number;
  fastAnswers: number;
  earnedBadges: string[];
  categoryStats: Record<string, { answered: number; correct: number }>;
  updatedAt: Timestamp;
}

export interface BadgeDefinition {
  id: string;
  name: string;
  icon: string;
  description: string;
  conditionType: "streak" | "correct" | "quizzes" | "perfect" | "speed" | "mastery";
  conditionValue: number;
  examBody?: string; // if mastery badge, which exam body
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  totalXP: number;
  level: number;
  currentStreak: number;
}

// ─── Admin Question Management Types ───

export interface QuestionDraft {
  moduleId: string;
  chapterId: string;
  topicId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: string;
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

// ─── Gamification functions ───

export async function getUserGamification(userId: string): Promise<UserGamification | null> {
  const snapshot = await getDocs(
    query(collection(db, "userGamification"), where("userId", "==", userId), limit(1))
  );
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as UserGamification;
}

export async function upsertUserGamification(
  userId: string,
  data: Partial<Omit<UserGamification, "id" | "userId">>
) {
  const snapshot = await getDocs(
    query(collection(db, "userGamification"), where("userId", "==", userId), limit(1))
  );
  if (snapshot.empty) {
    return addDoc(collection(db, "userGamification"), {
      userId,
      totalXP: 0,
      level: 1,
      currentStreak: 0,
      longestStreak: 0,
      lastStudyDate: "",
      totalCorrect: 0,
      totalAnswered: 0,
      totalQuizzesCompleted: 0,
      perfectQuizzes: 0,
      fastAnswers: 0,
      earnedBadges: [],
      categoryStats: {},
      ...data,
      updatedAt: serverTimestamp(),
    });
  } else {
    return updateDoc(doc(db, "userGamification", snapshot.docs[0].id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  }
}

export async function getLeaderboard(limitCount = 20): Promise<LeaderboardEntry[]> {
  const snapshot = await getDocs(
    query(collection(db, "userGamification"), orderBy("totalXP", "desc"), limit(limitCount))
  );
  return snapshot.docs.map((d) => {
    const data = d.data();
    return {
      userId: data.userId,
      displayName: data.displayName || "Anonymous",
      totalXP: data.totalXP || 0,
      level: data.level || 1,
      currentStreak: data.currentStreak || 0,
    };
  });
}

// ─── Admin: Question CRUD ───

export async function addQuestion(data: QuestionDraft): Promise<string> {
  const docRef = await addDoc(collection(db, "questions"), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateQuestion(questionId: string, data: Partial<QuestionDraft>) {
  return updateDoc(doc(db, "questions"), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteQuestion(questionId: string) {
  const { deleteDoc: firestoreDelete } = await import("firebase/firestore");
  return firestoreDelete(doc(db, "questions", questionId));
}

export async function getAllQuestions(
  filters?: { moduleId?: string; chapterId?: string; difficulty?: string },
  maxResults = 200
): Promise<Question[]> {
  let q = query(collection(db, "questions"), limit(maxResults));
  if (filters?.moduleId) q = query(q, where("moduleId", "==", filters.moduleId));
  if (filters?.chapterId) q = query(q, where("chapterId", "==", filters.chapterId));
  if (filters?.difficulty) q = query(q, where("difficulty", "==", filters.difficulty));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Question));
}
