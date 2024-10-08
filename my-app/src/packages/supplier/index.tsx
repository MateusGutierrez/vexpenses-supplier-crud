import { isEmpty } from 'lodash';
import { supplierStore } from '../../store/supplierStore/index';
import { ButtonUI } from '../../components/buttons/style';
import SupplierCard from '../supplierCard';
import useIsVisible from '../hooks/useIsVisible';
import Modal from '../../components/modal';
import { SupplierForm } from '../../components/forms/supplier';
import { HeaderSupplier, ListUI } from './style';
import { InputForm } from '../searchSuppliers';
import { useState } from 'react';
import { Supplier } from '../../store/supplierStore/interface';
import { DownloadCSVButton } from '../download';

export const SupplierFeature = () => {
  const supplierList = supplierStore(state => state.supplierList);
  const [filteredSuppliers, setFilteredSuppliers] = useState<Supplier[] | null>(
    supplierList
  );
  const addSupplier = supplierStore(state => state.addSupplier);
  const { isVisible, show, hide } = useIsVisible(false);
  return (
    <div>
      <HeaderSupplier>
        <h1>Suppliers</h1>
        <div className="container">
          <InputForm
            suppliers={supplierList}
            setFilteredSuppliers={setFilteredSuppliers}
          />
          <div className="add-download">
            <ButtonUI onClick={show}>Add Supplier</ButtonUI>
            {filteredSuppliers && (
              <DownloadCSVButton suppliers={filteredSuppliers} />
            )}
            <Modal isVisible={isVisible} closeModal={hide}>
              <SupplierForm add={addSupplier} hide={hide} />
            </Modal>
          </div>
        </div>
      </HeaderSupplier>
      {isEmpty(filteredSuppliers) ? (
        <div>
          <label>
            The suppliers list is currently empty. Please add new suppliers to
            proceed.
          </label>
        </div>
      ) : (
        <ListUI>
          {filteredSuppliers?.map((supplier, index) => (
            <li key={index}>
              <SupplierCard supplier={supplier} />
            </li>
          ))}
        </ListUI>
      )}
    </div>
  );
};
