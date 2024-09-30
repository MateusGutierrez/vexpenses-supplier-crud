import LoginForm from '../../components/forms/login';
import { LoginUI } from './style';

const Login = () => {
  return (
    <>
      <LoginUI>
        <div>
          <h1>Login</h1>
        </div>
        <LoginForm />
      </LoginUI>
    </>
  );
};
export default Login;
