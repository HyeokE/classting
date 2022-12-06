import { QuizLogWithDate } from '../types/quiz';

import { correctAnswerCounter } from './correctAnswerCounter';

const quizLogWithDateMock: QuizLogWithDate = {
  startDate: '2021-08-01T00:00:00.000Z',
  endDate: '2021-08-01T00:00:00.000Z',
  quizLog: [
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'hard',
      question:
        'Which of the following is an existing family in &quot;The Sims&quot;?',
      correct_answer: 'The Goth Family',
      incorrect_answers: [
        'The Family',
        'The Simoleon Family',
        'The Proud Family',
      ],
      selectedAnswer: 'The Goth Family',
    },
    {
      category: 'Entertainment: Music',
      type: 'multiple',
      difficulty: 'hard',
      question: 'Which of these songs is NOT included in the',
      correct_answer: 'Skies on Fire - AC/DC',
      incorrect_answers: [
        'Heathens - Twenty One Pilots',
        'Without Me - Eminem',
        'Fortunate Son - Creedence Clearwater Revival',
      ],
      selectedAnswer: 'Skies on Fire - AC/DC',
    },
  ],
};
describe('correctAnswerCounter', () => {
  test('test', () => {
    expect(correctAnswerCounter(quizLogWithDateMock)).toBe(2);
  });
});
