import Form from '../../components/form';
import { loginSchema } from '../../schemas/login';
import loginFields from '../../schemas/login/fields';
import { LoginUI } from './style';

const Login = () => (
  <LoginUI>
    <h1>Login</h1>
    <Form schema={loginSchema} fields={loginFields} buttonLabel="Login" />
  </LoginUI>
);
export default Login;
