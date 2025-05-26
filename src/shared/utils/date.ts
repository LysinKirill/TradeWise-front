export const formatDateLocale = (date: string) => {
  const newDate = new Date(date);

  return newDate.toLocaleString('ru-RU');
};

export const formatDateTime = (dateString: string | Date) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};