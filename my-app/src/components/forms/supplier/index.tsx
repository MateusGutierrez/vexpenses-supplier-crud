import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SupplierFieldValues, supplierSchema } from '../../../schemas/supplier';
import uuid4 from 'uuid4';
import { Supplier } from '../../../store/supplierStore/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCep } from '../../../services/cep';
import { formatCep, formatPhone, formatState } from './utils';
import { FormContainerUI } from './style';
import { ButtonUI } from '../../buttons/style';
import { IoTrash } from 'react-icons/io5';
import ScrollArea from '../../scrollarea';

interface Props {
  supplier?: Supplier;
  add?: (data: Supplier) => void;
  edit?: (data: Supplier, id: string) => void;
  hide: () => void;
}
export const SupplierForm: React.FC<Props> = ({
  supplier,
  add,
  edit,
  hide
}) => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SupplierFieldValues>({
    resolver: yupResolver(supplierSchema),
    defaultValues: supplier || {
      name: '',
      description: '',
      contacts: [{ name: '', phone: '' }],
      address: {
        cep: '',
        state: '',
        city: '',
        street: '',
        number: undefined,
        reference: ''
      }
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts'
  });
  const { retrieveAddress } = useCep();
  const handleCepOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value;
    const formatedCep = formatCep(cep);
    setValue('address.cep', formatedCep);
    const addressData = await retrieveAddress(formatedCep);
    console.log(addressData);
    if (addressData) {
      setValue('address.state', addressData.uf);
      setValue('address.city', addressData.localidade);
      setValue('address.reference', addressData.complemento);
      setValue('address.street', addressData.logradouro);
    }
  };
  const handlePhoneChange = (index: number, value: string) => {
    const formattedPhone = formatPhone(value);
    setValue(`contacts.${index}.phone`, formattedPhone);
  };

  const handleStateChange = (value: string) => {
    const formattedState = formatState(value);
    setValue('address.state', formattedState);
  };
  const onSubmit = (data: SupplierFieldValues) => {
    if (add) {
      const newSupplier: Supplier = { ...data, id: uuid4() };
      add(newSupplier);
      toast.success('Fornecedor adicionado com sucesso!', { autoClose: 2500 });
      return hide();
    }
    if (edit && supplier) {
      const supplierWithId: Supplier = { ...data, id: supplier.id as string };
      edit(supplierWithId, supplier.id as string);
      toast.success('Fornecedor editado com sucesso!', { autoClose: 2500 });
      return hide();
    }
  };
  React.useEffect(() => {
    if (supplier) {
      reset(supplier);
    }
  }, [supplier, reset]);
  return (
    <FormContainerUI onSubmit={handleSubmit(onSubmit)}>
      <div className="name-descr-container">
        <div className="field">
          <label>Name<strong className='required'>*</strong></label>
          <input {...register('name')} />
          {errors.name && toast.error(errors.name.message, { autoClose: 2500 })}
        </div>
        <div className="field descript">
          <label>Description</label>
          <input {...register('description')} />
          {errors.description &&
            toast.error(errors.description.message, { autoClose: 2500 })}
        </div>
      </div>
      <div className="contact-div">
        <label className="contact-title">Contacts<strong className='required'>*</strong></label>
        <ScrollArea>
          <div className="scroll-container">
            {fields.map((field, index) => (
              <div key={field.id} className="contact-container">
                <div className="field">
                  <label>Name<strong className='required'>*</strong></label>
                  <input {...register(`contacts.${index}.name`)} />
                  {errors.contacts?.[index]?.name &&
                    toast.error(errors.contacts[index].name?.message, {
                      autoClose: 2500
                    })}
                </div>
                <div className="field">
                  <label>Phone<strong className='required'>*</strong></label>
                  <div className="remove-contact">
                    <input
                      {...register(`contacts.${index}.phone`)}
                      onChange={e => handlePhoneChange(index, e.target.value)}
                    />
                    {errors.contacts?.[index]?.phone &&
                      toast.error(errors.contacts[index].phone?.message, {
                        autoClose: 2500
                      })}
                    <ButtonUI type="button" onClick={() => remove(index)}>
                      <IoTrash />
                    </ButtonUI>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <ButtonUI
          type="button"
          onClick={() => append({ name: '', phone: '' })}
          className="add-contact"
        >
          Add Contact
        </ButtonUI>
      </div>
      <div>
        <div className="cep-city-state">
          <div className="field-cep">
            <label>CEP<strong className='required'>*</strong></label>
            <input {...register('address.cep')} onBlur={handleCepOnChange} />
            {errors.address?.cep &&
              toast.error(errors.address?.cep.message, { autoClose: 2500 })}
          </div>
          <div className="field-state">
            <label>State<strong className='required'>*</strong></label>
            <input
              {...register('address.state')}
              onChange={e => handleStateChange(e.target.value)}
            />
            {errors.address?.state &&
              toast.error(errors.address?.state.message, { autoClose: 2500 })}
          </div>
          <div className="field-city">
            <label>City<strong className='required'>*</strong></label>
            <input {...register('address.city')} />
            {errors.address?.city &&
              toast.error(errors.address?.city.message, { autoClose: 2500 })}
          </div>
          <div className="field-state">
            <label>Number<strong className='required'>*</strong></label>
            <input type="number" {...register('address.number')} />
            {errors.address?.number &&
              toast.error(errors.address?.number.message, { autoClose: 2500 })}
          </div>
        </div>
      </div>
      <div className="street-complement">
        <div className="field">
          <label>Street<strong className='required'>*</strong></label>
          <input {...register('address.street')} />
          {errors.address?.street &&
            toast.error(errors.address?.street.message, { autoClose: 2500 })}
        </div>
        <div className="field">
          <label>Reference</label>
          <input {...register('address.reference')} />
          {errors.address?.reference &&
            toast.error(errors.address?.reference.message, { autoClose: 2500 })}
        </div>
      </div>
      <ButtonUI type="submit" className="finish">
        Finish
      </ButtonUI>
    </FormContainerUI>
  );
};
