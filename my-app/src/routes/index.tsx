import { Route, Routes } from 'react-router-dom';
import paths from './paths';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Register from '../pages/register';
import Page from '../pages';

const MainRoute = () => (
  <Routes>
    <Route path={paths.home} element={<Page children={<Login />} />} />
    <Route path={paths.login} element={<Page children={<Login />} />} />
    <Route path={paths.register} element={<Page children={<Register />} />} />
    <Route path={paths.dashboard} element={<Page children={<Dashboard />} />} />
  </Routes>
);

export default MainRoute;
