export const getDateYear = dateStr => new Date(dateStr).getFullYear();

export const getDateDay = dateStr => {
  const date = new Date(dateStr);
  return `${date.toLocaleString('default', {month: 'long'})}, ${date.getDate()}`;
};
