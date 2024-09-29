import Form from '../../components/forms';
import { registerSchema } from '../../schemas/register';
import registerFields from '../../schemas/register/fields';
import { RegisterUI } from './styled';
import usersDummy from '../../apis/dummys/users';
import { useAuth } from '../../services/user';

const Register = () => {
  // const signup = (data: any) => {
  //   console.log(data)
  // }
  const { signup } = useAuth();

  return (
    <>
      <RegisterUI>
        <h1>Register</h1>
        <Form
          schema={registerSchema}
          fields={registerFields}
          buttonLabel="Register"
          submit={() => {}}
        />
      </RegisterUI>
    </>
  );
};
export default Register;
