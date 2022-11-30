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
  startDate: Date | undefined;
  endDate: Date | undefined;
  quizLog: QuizLog[];
}
export type QuizLogList = QuizLogWithDate[];
