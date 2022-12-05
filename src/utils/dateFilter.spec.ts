import { dateFilter } from './dateFilter';

const dateFilterMock = {
  date: '2022-12-05T16:18:32.400Z',
  format: 'YYYY-MM-DD-HH-mm-ss',
  want: '2022-12-06-01-18-32',
};

describe('dateFilter', () => {
  test('test', () => {
    expect(dateFilter(dateFilterMock.date, dateFilterMock.format)).toBe(
      dateFilterMock.want,
    );
  });
});
