import { ForwardedRef, forwardRef } from 'react';
import {
  UseFormRegister,
  FieldError,
  FieldErrors,
  FieldValues
} from 'react-hook-form';
import { InputUI } from './style';

interface InputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps<any>>(
  (
    { register, errors, name, label, type, required },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputUI>
        <label>{label}</label>
        <input
          {...register(name as string, {
            required: required ? `${label} is required` : false
          })}
          type={type}
          ref={ref}
        />
        {errors[name] && (
          <span>
            {(errors[name] as FieldError).message || 'Error occurred'}
          </span>
        )}
      </InputUI>
    );
  }
);

Input.displayName = 'Input';
export default Input;
