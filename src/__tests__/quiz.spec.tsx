import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as apis from '../apis/getQuizList';
import App from '../App';
jest.mock('chart.js', () => 'Chart');
describe('퀴즈 로직 테스트', () => {
  test('시작 - 퀴즈 - 결과', async () => {
    const spyGetQuizList = jest.spyOn(apis, 'getQuizList');

    renderWithRouter(<App />, { route: '/' });

    await screen.findByText(/클래스팅 프론트엔드 과제/);
    await userEvent.click(screen.getByRole('button', { name: /퀴즈 풀기/ }));
    await screen.findByText(/퀴즈를 불러오는 중이에요/);
    await waitFor(() => expect(spyGetQuizList).toHaveBeenCalled(), {
      timeout: 5000,
    });

    const quizList = new Array(10);

    for (let i = 0; i < quizList.length; i++) {
      await answerQuiz();
    }

    await screen.findByText(/퀴즈 결과/);
  });
});

const answerQuiz = async () => {
  await screen.findByText(/다음 문제/);
  await delay(300);
  await userEvent.click(screen.getAllByRole('listitem')[0]);
  await userEvent.click(screen.getByRole('button', { name: /다음 문제/ }));
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function renderWithRouter(Component: ReactElement, options: { route: string }) {
  return render(
    <MemoryRouter initialEntries={[options.route]}>{Component}</MemoryRouter>,
  );
}
