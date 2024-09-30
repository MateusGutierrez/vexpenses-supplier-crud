import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormUI } from '../style';
import { ButtonUI } from '../../buttons/style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../services/user';
import { registerFormValues, registerSchema } from '../../../schemas/register';
import { InputContainerUI, LinkUI } from '../login/style';
import paths from '../../../routes/paths';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<registerFormValues>({
    resolver: yupResolver(registerSchema)
  });
  const { signup } = useAuth();
  const onSubmit = useCallback(
    (data: registerFormValues) => {
      signup(data);
    },
    [signup]
  );
  return (
    <FormUI onSubmit={handleSubmit(onSubmit)}>
      <InputContainerUI>
        <label>Name</label>
        <input {...register('name')} type="text" />
        {errors.name && errors.name.message
          ? toast.error(errors.name.message, { autoClose: 2500 })
          : null}
      </InputContainerUI>
      <InputContainerUI>
        <label>Email</label>
        <input {...register('email')} type="email" />
        {errors.email && errors.email.message
          ? toast.error(errors.email.message, { autoClose: 2500 })
          : null}
      </InputContainerUI>
      <InputContainerUI>
        <label>Password</label>
        <input {...register('password')} type="password" />
        {errors.password && errors.password.message
          ? toast.error(errors.password.message, { autoClose: 2500 })
          : null}
      </InputContainerUI>
      <ButtonUI className="submit" type="submit">
        Register
      </ButtonUI>
      <LinkUI>
        <a href={paths.login}>
          <label>Login</label>
        </a>
      </LinkUI>
    </FormUI>
  );
};

export default RegisterForm;
