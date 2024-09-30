import LoginForm from '../../components/forms/login';
import { LoginUI } from './style';

const Login = () => {
  return (
    <>
      <LoginUI>
        <h1>Login</h1>
        <LoginForm />
      </LoginUI>
    </>
  );
};
export default Login;
