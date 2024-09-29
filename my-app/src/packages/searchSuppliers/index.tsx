import { useForm } from 'react-hook-form';
import { InputFormProps } from './interface';
import * as yup from 'yup';
import { performFuzzySearch } from './fuzzySearch';
import { useEffect } from 'react';
import { ButtonUI } from '../../components/buttons/style';
import { IoClose, IoSearch } from 'react-icons/io5';
import { yupResolver } from '@hookform/resolvers/yup';
import { FuzzyContainer } from './styled';

const FormSchema = yup.object({
  text: yup.string().optional()
});

export function InputForm({ suppliers, setFilteredSuppliers }: InputFormProps) {
  const form = useForm<yup.InferType<typeof FormSchema>>({
    resolver: yupResolver(FormSchema),
    defaultValues: {
      text: ''
    }
  });
  async function onSubmit(data: yup.InferType<typeof FormSchema>) {
    if (suppliers) {
      const results = await performFuzzySearch(suppliers, data.text);
      setFilteredSuppliers(results);
    }
  }
  function onClear() {
    setFilteredSuppliers(suppliers);
    form.resetField('text');
  }
  useEffect(() => {
    if (form.watch('text') === '') {
      setFilteredSuppliers(suppliers);
    }
  }, [form, suppliers, setFilteredSuppliers]);
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FuzzyContainer>
        <input placeholder="Search" {...form.register('text')} />
        <ButtonUI type="submit">
          <IoSearch />
        </ButtonUI>
        <ButtonUI onClick={onClear}>
          <IoClose />
        </ButtonUI>
      </FuzzyContainer>
    </form>
  );
}
