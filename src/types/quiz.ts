export type Quiz = {
  category: string;
  type: 'multiple';
  difficulty: 'hard' | 'medium' | 'easy';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export interface QuizLog extends Quiz {
  selectedAnswer: string;
  date: Date;
}
