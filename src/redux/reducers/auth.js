import {UPDATE_ACCOUNT} from '../actions/names';
import assoc from 'ramda/src/assoc';
const initAccount = {
  access_token: '',
  refresh_token: '',
  expires_in: 0,
  role: 'cc',
  status: 'ACTIVE',
  authorities: ['UV'],
};

export const auth = (state = initAccount, {type, payload}) => {
  switch (type) {
    case UPDATE_ACCOUNT:
      return payload;

    case 'ALL':
      return assoc(
        'authorities',
        [
          'USR',
          'MCR',
          'RER',

        ],
        state
      );

    default:
      return state;
  }
};
