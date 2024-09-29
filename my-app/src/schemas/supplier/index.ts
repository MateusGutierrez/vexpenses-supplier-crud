import * as yup from 'yup';

const phoneRegExp = /^\(\d{2}\) \d{5}-\d{4}$/;
const cepRegExp = /^\d{5}-\d{3}$/;
const stateRegExp = /^[A-Z]{2}$/;

export const supplierSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z0-9 ]+$/, 'Name must be alphanumeric')
    .required('Name is required'),
  description: yup.string(),
  contacts: yup
    .array()
    .of(
      yup.object({
        name: yup.string().required('Contact name is required'),
        phone: yup
          .string()
          .matches(phoneRegExp, 'Invalid phone number')
          .required('Phone number is required')
      })
    )
    .min(1)
    .required('At least one contact is required'),
  address: yup.object({
    cep: yup
      .string()
      .matches(cepRegExp, 'Invalid postal code')
      .required('Postal code is required'),
    state: yup.string().max(2).required('State is required'),
    city: yup.string().required('City is required'),
    street: yup.string().required('Street is required'),
    number: yup
      .number()
      .typeError('Number must be numeric')
      .required('Number is required'),
    reference: yup.string()
  })
});
export type SupplierFieldValues = yup.InferType<typeof supplierSchema>;
