/**
 * Gets an object and string array of wanted filters
 * @param {object} filters
 * @param {string[]} keys
 */

export const makeQueries = (filters, keys) => {
  let str = '';
  keys.forEach(key => {
    
    str += filters[key] !== void 0 ? `&${key}=${filters[key]}` : '';
  });
  // replace the first &  to ?  www.example.com?param1=1&param2=2
  str = str.replace(/&/, '?');
  return str;
};
