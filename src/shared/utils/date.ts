export const formatDateLocale = (date: string) => {
  const newDate = new Date(date);

  return newDate.toLocaleString('ru-RU');
};
