import { useEffect } from 'react';
import { SupplierFeature } from '../../packages/supplier';
import { DashboardUI } from './style';
import { userStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import paths from '../../routes/paths';

const Dashboard = () => {
  const loggedUser = userStore(state => state.loggedUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser) navigate(paths.login);
  }, [loggedUser]);
  return (
    <DashboardUI>
      <div className="container">
        <SupplierFeature />
      </div>
    </DashboardUI>
  );
};
export default Dashboard;
