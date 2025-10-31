
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/home/page'));
const DienstenPage = lazy(() => import('../pages/diensten/page'));
const OverOnsPage = lazy(() => import('../pages/over-ons/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/diensten',
    element: <DienstenPage />,
  },
  {
    path: '/over-ons',
    element: <OverOnsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
