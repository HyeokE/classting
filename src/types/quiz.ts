export type Question = {
  category: string;
  type: 'multiple';
  difficulty: 'hard' | 'medium' | 'easy';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export interface QuizLog extends Question {
  selectedAnswer: string;
}
export interface QuizLogWithDate {
  startDate: string | undefined;
  endDate: string | undefined;
  quizLog: QuizLog[];
}
export type QuizLogList = QuizLogWithDate[];
