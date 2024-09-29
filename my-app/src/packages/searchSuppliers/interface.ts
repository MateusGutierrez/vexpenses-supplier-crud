import { Supplier } from '../../store/supplierStore/interface';

export interface InputFormProps {
  suppliers: Supplier[] | null;
  setFilteredSuppliers: (suppliers: Supplier[] | null) => void;
}
