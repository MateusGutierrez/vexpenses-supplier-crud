import Form from '../../components/form';
import { supplierSchema } from '../../schemas/supplier';
import supplierFields from '../../schemas/supplier/fields';
import { DashboardUI } from './style';
import { TableDemo } from './table';

const Dashboard = () => (
  <DashboardUI>
    <div className="left-container">
      <h1>DASHBOARD</h1>
      <Form
        schema={supplierSchema}
        fields={supplierFields}
        buttonLabel="Dashboard"
      />
    </div>
    <div>
      <TableDemo />
    </div>
  </DashboardUI>
);
export default Dashboard;
