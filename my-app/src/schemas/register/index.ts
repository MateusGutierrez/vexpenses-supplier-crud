import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
});
export type registerFormValues = yup.InferType<typeof registerSchema>;
