export const groupBy = (items, fn) =>
  Object.entries(
    items.reduce(
      (result, item) => ({
        ...result,
        [fn(item)]: [...(result[fn(item)] || []), item],
      }),
      {},
    ),
  ).reduce((acc, [year, posts]) => acc.concat({year, posts}), []);

export const getDateYear = ({node}) => new Date(node.frontmatter.date).getFullYear();

export const getDateDay = ({node}) => {
  const date = new Date(node.frontmatter.date);
  return `${date.toLocaleString('default', {month: 'long'})}, ${date.getDate()}`;
};
