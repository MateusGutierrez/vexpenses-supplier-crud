import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormUI } from '../style';
import { ButtonUI } from '../../buttons/style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../services/user';
import { registerFormValues, registerSchema } from '../../../schemas/register';

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
      <div>
        <label>Name</label>
        <input {...register('name')} type="text" />
        {errors.name && toast.error(errors.name.message, { autoClose: 2500 })}
      </div>
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
        Register
      </ButtonUI>
    </FormUI>
  );
};

export default RegisterForm;
