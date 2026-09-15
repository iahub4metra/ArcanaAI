export const slugify = (name: string): string => {
  return name.toLocaleLowerCase().replace(/\s+/g, '-');
};
