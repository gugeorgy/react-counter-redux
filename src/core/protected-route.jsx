import { Navigate, Outlet } from 'react-router-dom';
import appRoutes from './routes';

const ProtectedRoute = () => {
  let auth = { token: localStorage.getItem('userToken') };
  return auth.token ? <Outlet /> : <Navigate to={appRoutes.LOGIN} />;
};

export default ProtectedRoute;
