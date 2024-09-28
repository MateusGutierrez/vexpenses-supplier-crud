import Form from '../../components/form';
import { registerSchema } from '../../schemas/register';
import registerFields from '../../schemas/register/fields';
import { RegisterUI } from './styled';

const Register = () => (
  <RegisterUI>
    <h1>Register</h1>
    <Form
      schema={registerSchema}
      fields={registerFields}
      buttonLabel="Register"
    />
  </RegisterUI>
);
export default Register;
