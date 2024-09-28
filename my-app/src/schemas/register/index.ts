import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be a valid number')
    .min(10, 'Number too short')
    .max(15, 'Large number')
    .required('Phone number is required')
});
