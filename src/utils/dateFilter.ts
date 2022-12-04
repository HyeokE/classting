/**
 *
 * @param date iso date string
 * @param format date format ex: yyyy-MM-dd-HH-mm-ss
 * @returns 입력한 format에 맞는 string을 리턴합니다.
 */

export const dateFilter = (date: string, format: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  const isZero = (num: number) => !(num === 0);

  return format
    .replace('YYYY', isZero(year) ? year.toString() : '')
    .replace('MM', isZero(month) ? month.toString() : '')
    .replace('DD', isZero(day) ? day.toString() : '')
    .replace('HH', isZero(hours) ? hours.toString() : '')
    .replace('mm', isZero(minutes) ? minutes.toString() : '')
    .replace('ss', isZero(seconds) ? seconds.toString() : '');
};
