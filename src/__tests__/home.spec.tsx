import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from '../App';
jest.mock('chart.js', () => 'Chart');
describe('퀴즈 로직 테스트', () => {
  test('', async () => {
    renderWithRouter(<App />, { route: '/' });
    // await userEvent.click(screen.getByText('퀴즈 시작하기'));
  });
});

function renderWithRouter(Component: ReactElement, options: { route: string }) {
  return render(
    <MemoryRouter initialEntries={[options.route]}>{Component}</MemoryRouter>,
  );
}
