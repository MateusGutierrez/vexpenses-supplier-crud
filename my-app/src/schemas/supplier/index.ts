import * as yup from 'yup';

const phoneRegExp = /^\(\d{2}\) \d{5}-\d{4}$/;
const cepRegExp = /^\d{5}-\d{3}$/;
const stateRegExp = /^[A-Z]{2}$/;

export const supplierSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Z0-9 ]+$/, 'Name must be alphanumeric')
    .required('Name is required'),
  description: yup
    .string()
    .matches(/^[a-zA-Z0-9 ]*$/, 'Description must be alphanumeric'),
  contacts: yup
    .array()
    .of(
      yup.object({
        name: yup
          .string()
          .matches(/^[a-zA-Z ]+$/, 'Name must be alphabetic')
          .required('Contact name is required'),
        phone: yup
          .string()
          .matches(phoneRegExp, 'Invalid phone number')
          .required('Phone number is required')
      })
    )
    .min(1, 'At least one contact is required'),
  address: yup.object({
    cep: yup
      .string()
      .matches(cepRegExp, 'Invalid postal code')
      .required('Postal code is required'),
    state: yup
      .string()
      .matches(stateRegExp, 'Invalid state')
      .required('State is required'),
    city: yup
      .string()
      .matches(/^[a-zA-Z ]+$/, 'City must be alphabetic')
      .required('City is required'),
    street: yup
      .string()
      .matches(/^[a-zA-Z0-9 ]+$/, 'Street must be alphanumeric')
      .required('Street is required'),
    number: yup
      .number()
      .typeError('Number must be numeric')
      .required('Number is required'),
    reference: yup
      .string()
      .matches(/^[a-zA-Z0-9 ]*$/, 'Reference must be alphanumeric')
  })
});
