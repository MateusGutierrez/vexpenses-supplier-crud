import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObject, ObjectSchema } from 'yup';
import * as yup from 'yup';
import Input from '../input';
import { ButtonUI } from '../buttons/style';
import { FormUI } from './style';
import { useCallback } from 'react';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

interface Props {
  schema: ObjectSchema<AnyObject>;
  fields: FormField[];
  buttonLabel: string;
  submit: (data?: any) => void;
}

const Form = ({ schema, fields, buttonLabel, submit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema)
  });
  const onSubmit = useCallback((data: yup.InferType<typeof schema>) => {
    console.log(data);
    submit(data);
  }, []);

  return (
    <FormUI onSubmit={handleSubmit(onSubmit)}>
      {fields.map(field => (
        <Input
          key={field.name}
          register={register}
          errors={errors}
          name={field.name}
          label={field.label}
          type={field.type}
          required={field.required}
        />
      ))}
      <ButtonUI className="submit" type="submit">
        {buttonLabel}
      </ButtonUI>
    </FormUI>
  );
};

export default Form;
