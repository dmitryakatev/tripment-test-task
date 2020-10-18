const escapeRegexRe = /([-.*+?\^${}()|\[\]\/\\])/g;

export const createRegexSearch = (str: string) => {
  return new RegExp(str.replace(escapeRegexRe, '\\$1'), 'i');
};
