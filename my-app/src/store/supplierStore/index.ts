import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Store, Supplier } from './interface';

export const supplierStore = create<Store>()(
  persist(
    set => ({
      supplierList: [],
      addSupplier: (supplier: Supplier) =>
        set(state => ({
          supplierList: [...state.supplierList, supplier]
        })),
      editSupplier: (newSupplier: Supplier, id: string | number) =>
        set(state => ({
          supplierList: state.supplierList.map(supplier =>
            supplier.id === id ? newSupplier : supplier
          )
        })),
      removeSupplier: (id: string | number) =>
        set(state => ({
          supplierList: state.supplierList.filter(
            supplier => supplier.id !== id
          )
        }))
    }),
    {
      name: 'supplier-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
