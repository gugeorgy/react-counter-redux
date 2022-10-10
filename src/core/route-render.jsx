import { useRoutes } from 'react-router-dom';
import routesConfig from './routes-config';

const RouterRenderer = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

export default RouterRenderer;
