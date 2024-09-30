import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormUI } from '../style';
import { ButtonUI } from '../../buttons/style';
import { loginFormValues, loginSchema } from '../../../schemas/login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../services/user';
import paths from '../../../routes/paths';
import { InputContainerUI, LinkUI } from './style';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginFormValues>({
    resolver: yupResolver(loginSchema)
  });
  const { login } = useAuth();
  const onSubmit = useCallback(
    (data: loginFormValues) => {
      login(data);
    },
    [login]
  );
  return (
    <FormUI onSubmit={handleSubmit(onSubmit)}>
      <InputContainerUI>
        <label>Email</label>
        <input {...register('email')} type="email" name='email'/>
        {errors.email && errors.email.message ? toast.error(errors.email.message, { autoClose: 2500 }) : null}
      </InputContainerUI>
      <InputContainerUI>
        <label>Password</label>
        <input {...register('password')} type="password" name='password'/>
        {errors.password && errors.password.message ? 
          toast.error(errors.password.message, { autoClose: 2500 }) : null}
      </InputContainerUI>
      <ButtonUI className="submit" type="submit">
        Login
      </ButtonUI>
      <LinkUI>
        <a href={paths.register}>
          <label>Register</label>
        </a>
      </LinkUI>
    </FormUI>
  );
};

export default LoginForm;
