import curry from 'ramda/src/curry';
import pathOr from 'ramda/src/pathOr';

export const MSGS = {
  name: {
    en: 'Contest ID',
  },
};

export const getMsg = curry((lng, key) => pathOr(key, [key, lng], MSGS));
