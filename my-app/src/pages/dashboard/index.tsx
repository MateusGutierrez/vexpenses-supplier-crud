import { SupplierFeature } from '../../packages/supplier';
import { DashboardUI } from './style';

const Dashboard = () => {
  return (
    <DashboardUI>
      <div className="left-container">
        <SupplierFeature />
      </div>
    </DashboardUI>
  );
};
export default Dashboard;
