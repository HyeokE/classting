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

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month.toString())
    .replace('DD', day.toString())
    .replace('HH', dateObj.getHours().toString())
    .replace('mm', dateObj.getMinutes().toString())
    .replace('ss', dateObj.getSeconds().toString());
};
