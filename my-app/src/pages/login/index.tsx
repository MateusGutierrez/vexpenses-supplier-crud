import Form from '../../components/forms';
import { loginSchema } from '../../schemas/login';
import loginFields from '../../schemas/login/fields';
import { useAuth } from '../../services/user';
import { LoginUI } from './style';

const Login = () => {
  const { login } = useAuth();
  return (
    <>
      <LoginUI>
        <h1>Login</h1>
        <Form
          schema={loginSchema}
          fields={loginFields}
          buttonLabel="Login"
          submit={login}
        />
      </LoginUI>
    </>
  );
};
export default Login;
