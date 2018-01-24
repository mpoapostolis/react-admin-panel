import auth from './auth';
import ui from './ui';
import api from './api';
import reports from './reports';
import filters from './filters';

export default {...auth, ...ui, ...api, ...reports, ...filters};
