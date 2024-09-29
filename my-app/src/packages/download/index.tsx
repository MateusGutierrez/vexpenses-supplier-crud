import { Supplier } from '../../store/supplierStore/interface';
import { ButtonUI } from '../../components/buttons/style';
import { useCallback } from 'react';
import { LuDownload } from 'react-icons/lu';

const convertSuppliersToCSV = (suppliers: Supplier[]) => {
  const headers =
    [
      'Name',
      'Description',
      'Contacts (Name)',
      'Contacts (Phone)',
      'CEP',
      'State',
      'City',
      'Street',
      'Number',
      'Reference',
      'ID'
    ].join(',') + '\n';
  const rows = suppliers
    .map(supplier => {
      const contacts = supplier.contacts
        .map(contact => `${contact.name} (${contact.phone})`)
        .join('; ');
      return [
        supplier.name,
        supplier.description || '',
        contacts,
        supplier.address.cep,
        supplier.address.state,
        supplier.address.city,
        supplier.address.street,
        supplier.address.number,
        supplier.address.reference || '',
        supplier.id
      ].join(',');
    })
    .join('\n');

  return headers + rows;
};

const downloadCSV = (data: Supplier[], filename: string) => {
  const csv = convertSuppliersToCSV(data);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

interface Props {
  suppliers: Supplier[];
}

export const DownloadCSVButton = ({ suppliers }: Props) => {
  const handleDownload = useCallback(() => {
    downloadCSV(suppliers, 'suppliers.csv');
  }, [suppliers]);
  return (
    <ButtonUI onClick={handleDownload}>
      <LuDownload />
    </ButtonUI>
  );
};
