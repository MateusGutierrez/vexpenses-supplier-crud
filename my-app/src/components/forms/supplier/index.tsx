import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SupplierFieldValues, supplierSchema } from '../../../schemas/supplier';
import uuid4 from 'uuid4';
import { Supplier } from '../../../store/supplierStore/interface';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCep } from '../../../services/cep';

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
    const addressData = await retrieveAddress(cep);
    console.log(addressData);
    if (addressData) {
      setValue('address.state', addressData.uf);
      setValue('address.city', addressData.localidade);
      setValue('address.reference', addressData.complemento);
      setValue('address.street', addressData.logradouro);
    }
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome*</label>
        <input {...register('name')} />
        {errors.name && toast.error(errors.name.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Descrição</label>
        <input {...register('description')} />
        {errors.description &&
          toast.error(errors.description.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Contatos*</label>
        {fields.map((field, index) => (
          <div key={field.id}>
            <label>Nome do Contato*</label>
            <input {...register(`contacts.${index}.name`)} />
            {errors.contacts?.[index]?.name &&
              toast.error(errors.contacts[index].name?.message, {
                autoClose: 2500
              })}
            <label>Telefone*</label>
            <input {...register(`contacts.${index}.phone`)} />
            {errors.contacts?.[index]?.phone &&
              toast.error(errors.contacts[index].phone?.message, {
                autoClose: 2500
              })}
            <button type="button" onClick={() => remove(index)}>
              Remover Contato
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: '', phone: '' })}>
          Adicionar Contato
        </button>
      </div>
      <div>
        <label>CEP*</label>
        <input {...register('address.cep')} onBlur={handleCepOnChange} />
        {errors.address?.cep &&
          toast.error(errors.address?.cep.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Estado*</label>
        <input {...register('address.state')} />
        {errors.address?.state &&
          toast.error(errors.address?.state.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Cidade*</label>
        <input {...register('address.city')} />
        {errors.address?.city &&
          toast.error(errors.address?.city.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Logradouro*</label>
        <input {...register('address.street')} />
        {errors.address?.street &&
          toast.error(errors.address?.street.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Número*</label>
        <input type="number" {...register('address.number')} />
        {errors.address?.number &&
          toast.error(errors.address?.number.message, { autoClose: 2500 })}
      </div>
      <div>
        <label>Referência</label>
        <input {...register('address.reference')} />
        {errors.address?.reference &&
          toast.error(errors.address?.reference.message, { autoClose: 2500 })}
      </div>
      <button type="submit">Finalizar</button>
    </form>
  );
};
