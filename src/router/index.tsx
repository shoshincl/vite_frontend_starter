import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { Navigate, useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import { ROUTES } from './routes';

import { UserContext } from '../contexts/User';

import PublicLayout from '../ui/layouts/app/Public';
import AuthenticatedLayout from '../ui/layouts/app/Authenticated';

import Index from '../ui/pages/root/index';
import Home from '../ui/pages/root/home';
import NotFound from '../ui/pages/not-found';
import Login from '../ui/pages/login';
import Signup from '../ui/pages/signup';

export default function Router() {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const routes: RouteObject[] = [
    {
      path: ROUTES.ROOT,
      element: user ? (
        <AuthenticatedLayout
          helmet={{
            title: t('router.root.home.helmet.TITLE'),
            meta: {
              name: t('router.root.home.helmet.meta.NAME'),
              content: t('router.root.home.helmet.meta.CONTENT'),
            },
          }}
        />
      ) : (
        <PublicLayout
          helmet={{
            title: t('router.root.index.helmet.TITLE'),
            meta: {
              name: t('router.root.index.helmet.meta.NAME'),
              content: t('router.root.index.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: user ? <Home /> : <Index /> }],
    },
    {
      path: ROUTES.LOGIN,
      element: (
        <PublicLayout
          helmet={{
            title: t('router.login.helmet.TITLE'),
            meta: {
              name: t('router.login.helmet.meta.NAME'),
              content: t('router.login.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <Login /> }],
    },
    {
      path: ROUTES.SIGNUP,
      element: (
        <PublicLayout
          helmet={{
            title: t('router.signup.helmet.TITLE'),
            meta: {
              name: t('router.signup.helmet.meta.NAME'),
              content: t('router.signup.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <Signup /> }],
    },
    {
      path: ROUTES.NOT_FOUND,
      element: <NotFound />,
    },
    { path: '*', element: <Navigate to={ROUTES.NOT_FOUND} /> },
  ];
  const router = useRoutes(routes);
  return <>{router}</>;
}
