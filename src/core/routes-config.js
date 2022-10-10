import appRoutes from './routes';

import { Login, Register, NotFound } from '../components';
import { Home, AuthLayout } from '../screens';
import ProtectedRoute from './protected-route';

const routesConfig = [
  {
    element: <ProtectedRoute />,
    children: [{ path: appRoutes.HOME, element: <Home /> }],
  },
  {
    path: appRoutes.AUTH,
    element: <AuthLayout />,
    children: [
      { path: appRoutes.LOGIN, element: <Login /> },
      { path: appRoutes.REGISTER, element: <Register /> },
    ],
  },
  { path: appRoutes.UNKNOWN, element: <NotFound /> },
];

export default routesConfig;
