export interface Contact {
  name: string;
  phone: string;
}

export interface Address {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  reference?: string;
}
export interface Supplier {
  name: string;
  description?: string;
  contacts: Contact[];
  address: Address;
  id: string;
}

export interface Store {
  supplierList: Supplier[];
  addSupplier: (supplier: Supplier) => void;
  editSupplier: (newSupplier: Supplier, id: string | number) => void;
  removeSupplier: (id: string | number) => void;
}
