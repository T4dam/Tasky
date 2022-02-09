import { VISITOR, LOGGED_IN } from './auth-types';

export default [

  {
    path: '/',
    pageName: 'PageLayout',
    children: [
      {
        path: null,
        pageName: 'HomePage',
      },
      {
        path: 'login',
        pageName: 'LoginPage',
        auth: VISITOR,
      },
      {
        path: 'BoardPage',
        pageName: 'BoardPage',
        auth: LOGGED_IN,
      },
      {
        path: 'register',
        pageName: 'RegisterPage',
        auth: VISITOR,
      },
      {
        path: '*',
        pageName: 'ErrorPage',
      },
    ],
  },

];
