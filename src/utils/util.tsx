/* eslint-disable no-useless-escape */
const escapeRegexRe = /([-.*+?\^${}()|\[\]\/\\])/g;
/* eslint-enable no-useless-escape */

export const createRegexSearch = (str: string) => {
  return new RegExp(str.replace(escapeRegexRe, '\\$1'), 'i');
};
