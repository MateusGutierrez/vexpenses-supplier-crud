import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormUI } from '../style';
import { ButtonUI } from '../../buttons/style';
import { loginFormValues, loginSchema } from '../../../schemas/login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../services/user';

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
      console.log(data, 'submit');
      login(data);
    },
    [login]
  );

  return (
    <FormUI onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input {...register('email')} type="email" />
        {errors.email && toast.error(errors.email.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Password</label>
        <input {...register('password')} type="password" />
        {errors.password &&
          toast.error(errors.password.message, { autoClose: 2500 })}
      </div>
      <ButtonUI className="submit" type="submit">
        Login
      </ButtonUI>
    </FormUI>
  );
};

export default LoginForm;
