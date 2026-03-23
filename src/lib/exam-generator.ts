/**
 * Mock Exam Generator for CISI Modules
 * Generates 80-question randomized exams following official chapter weightings
 * Ensures difficulty distribution: 30% easy, 50% medium, 20% hard
 * Prevents question repetition across consecutive exams
 */

import { QUESTION_BANK, BankQuestion } from './question-bank';

// Define exam structure: which chapters, how many questions, difficulty breakdown
const EXAM_STRUCTURE: Record<string, Array<{
  chapterId: string;
  count: number;
  easy: number;
  medium: number;
  hard: number;
}>> = {
  'cisi-icwim': [
    { chapterId: 'ch1', count: 14, easy: 4, medium: 7, hard: 3 },
    { chapterId: 'ch2', count: 6, easy: 2, medium: 3, hard: 1 },
    { chapterId: 'ch3', count: 9, easy: 3, medium: 5, hard: 1 },
    { chapterId: 'ch4', count: 16, easy: 5, medium: 8, hard: 3 },
    { chapterId: 'ch5', count: 14, easy: 4, medium: 7, hard: 3 },
    { chapterId: 'ch6', count: 5, easy: 2, medium: 3, hard: 0 },
    { chapterId: 'ch7', count: 11, easy: 3, medium: 6, hard: 2 },
    { chapterId: 'ch8', count: 5, easy: 2, medium: 3, hard: 0 },
  ],
  'cisi-reg': [
    { chapterId: 'reg-ch1', count: 6, easy: 2, medium: 3, hard: 1 },
    { chapterId: 'reg-ch2', count: 6, easy: 2, medium: 3, hard: 1 },
    { chapterId: 'reg-ch3', count: 10, easy: 3, medium: 5, hard: 2 },
    { chapterId: 'reg-ch4', count: 6, easy: 2, medium: 3, hard: 1 },
    { chapterId: 'reg-ch5', count: 6, easy: 2, medium: 3, hard: 1 },
    { chapterId: 'reg-ch6', count: 10, easy: 3, medium: 5, hard: 2 },
    { chapterId: 'reg-ch7', count: 10, easy: 3, medium: 5, hard: 2 },
    { chapterId: 'reg-ch8', count: 10, easy: 3, medium: 5, hard: 2 },
    { chapterId: 'reg-ch9', count: 6, easy: 2, medium: 3, hard: 1 },
    { chapterId: 'reg-ch10', count: 10, easy: 3, medium: 5, hard: 2 },
  ],
  'cisi-fpa': [
    { chapterId: 'fpa-ch1', count: 17, easy: 5, medium: 9, hard: 3 },
    { chapterId: 'fpa-ch2', count: 19, easy: 6, medium: 10, hard: 3 },
    { chapterId: 'fpa-ch3', count: 24, easy: 7, medium: 12, hard: 5 },
    { chapterId: 'fpa-ch4', count: 12, easy: 4, medium: 6, hard: 2 },
    { chapterId: 'fpa-ch5', count: 8, easy: 2, medium: 4, hard: 2 },
  ],
};

// Track which questions have been used in recent exams per module
// to prevent repetition
const usedQuestionIds: Map<string, Set<string>> = new Map();

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Get questions from a chapter filtered by difficulty
 */
function getQuestionsByDifficulty(
  chapterId: string,
  difficulty: 'easy' | 'medium' | 'hard',
  excludeIds: Set<string>
): BankQuestion[] {
  return QUESTION_BANK.filter(
    (q) =>
      q.chapterId === chapterId &&
      q.difficulty === difficulty &&
      !excludeIds.has(q.id)
  );
}

/**
 * Select N random questions from a filtered pool
 * Falls back to used questions if pool is too small
 */
function selectQuestions(
  chapterId: string,
  difficulty: 'easy' | 'medium' | 'hard',
  count: number,
  excludeIds: Set<string>
): BankQuestion[] {
  let questions = getQuestionsByDifficulty(chapterId, difficulty, excludeIds);

  // If we don't have enough unused questions, allow reuse
  if (questions.length < count) {
    const allQuestions = QUESTION_BANK.filter(
      (q) => q.chapterId === chapterId && q.difficulty === difficulty
    );
    questions = allQuestions;
  }

  // Shuffle and select
  const shuffled = shuffle(questions);
  return shuffled.slice(0, count);
}

/**
 * Generate a randomized 80-question mock exam
 * @param moduleId - One of: 'cisi-icwim', 'cisi-reg', 'cisi-fpa'
 * @returns Array of 80 BankQuestion objects with no repeats in recent exams
 */
export function generateMockExam(moduleId: string): BankQuestion[] {
  const structure = EXAM_STRUCTURE[moduleId];
  if (!structure) {
    throw new Error(`Unknown module ID: ${moduleId}`);
  }

  // Get the set of recently used questions for this module
  if (!usedQuestionIds.has(moduleId)) {
    usedQuestionIds.set(moduleId, new Set());
  }
  const recentlyUsed = usedQuestionIds.get(moduleId)!;

  const exam: BankQuestion[] = [];
  const currentExamIds = new Set<string>();

  // For each chapter in the exam structure
  for (const chapter of structure) {
    const { chapterId, easy: easyCount, medium: mediumCount, hard: hardCount } = chapter;

    // Select questions by difficulty
    const easyQs = selectQuestions(chapterId, 'easy', easyCount, recentlyUsed);
    const mediumQs = selectQuestions(chapterId, 'medium', mediumCount, recentlyUsed);
    const hardQs = selectQuestions(chapterId, 'hard', hardCount, recentlyUsed);

    // Combine and track
    const allChapterQs = [...easyQs, ...mediumQs, ...hardQs];
    allChapterQs.forEach((q) => {
      exam.push(q);
      currentExamIds.add(q.id);
    });
  }

  // Shuffle final exam to randomize order
  const finalExam = shuffle(exam);

  // Update the used set for next generation
  // Keep track of the last exam to prevent immediate repetition
  recentlyUsed.clear();
  currentExamIds.forEach((id) => recentlyUsed.add(id));

  return finalExam;
}

/**
 * Generate multiple unique exams (with minimal overlap)
 * Useful for creating exam banks
 */
export function generateMultipleMockExams(
  moduleId: string,
  count: number
): BankQuestion[][] {
  const exams: BankQuestion[][] = [];
  for (let i = 0; i < count; i++) {
    exams.push(generateMockExam(moduleId));
  }
  return exams;
}

/**
 * Get the target exam structure for a module
 * Useful for UI display and planning
 */
export function getExamStructure(
  moduleId: string
): Array<{ chapterId: string; count: number; easy: number; medium: number; hard: number }> {
  return EXAM_STRUCTURE[moduleId] || [];
}

/**
 * Validate that an exam has the correct structure
 */
export function validateExam(exam: BankQuestion[], moduleId: string): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  const structure = EXAM_STRUCTURE[moduleId];

  if (!structure) {
    return { valid: false, issues: [`Unknown module: ${moduleId}`] };
  }

  if (exam.length !== 80) {
    issues.push(`Exam should have 80 questions, got ${exam.length}`);
  }

  // Count by difficulty
  const difficulties = { easy: 0, medium: 0, hard: 0 };
  exam.forEach((q) => difficulties[q.difficulty]++);

  const expectedEasy = Math.round(80 * 0.3);
  const expectedMedium = Math.round(80 * 0.5);
  const expectedHard = 80 - expectedEasy - expectedMedium;

  if (Math.abs(difficulties.easy - expectedEasy) > 5) {
    issues.push(
      `Easy questions: expected ~${expectedEasy}, got ${difficulties.easy}`
    );
  }
  if (Math.abs(difficulties.medium - expectedMedium) > 5) {
    issues.push(
      `Medium questions: expected ~${expectedMedium}, got ${difficulties.medium}`
    );
  }
  if (Math.abs(difficulties.hard - expectedHard) > 5) {
    issues.push(
      `Hard questions: expected ~${expectedHard}, got ${difficulties.hard}`
    );
  }

  // Verify no duplicates
  const seenIds = new Set<string>();
  const duplicates: string[] = [];
  exam.forEach((q) => {
    if (seenIds.has(q.id)) {
      duplicates.push(q.id);
    }
    seenIds.add(q.id);
  });

  if (duplicates.length > 0) {
    issues.push(`Found ${duplicates.length} duplicate question(s)`);
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
