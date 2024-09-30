import { CardDescription, CardFooter, CardTitle } from '../../components/card';
import { Supplier } from '../../store/supplierStore/interface';
import { ButtonUI } from '../../components/buttons/style';
import {
  CardContainerContentUI,
  CardContainerHeaderUI,
  CardContainerUI
} from './styled';
import { supplierStore } from '../../store/supplierStore';
import Modal from '../../components/modal';
import useIsVisible from '../hooks/useIsVisible';
import { SupplierForm } from '../../components/forms/supplier';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoPencil, IoTrash } from 'react-icons/io5';
import { CardUI } from '../../components/card/style';
import { BsWhatsapp } from 'react-icons/bs';
import { useGoToWhatsApp } from '../whatsapp';
import { OpenMapButton } from '../maps';
import ScrollArea from '../../components/scrollarea';

interface Props {
  supplier: Supplier;
}

const SupplierCard = ({ supplier }: Props) => {
  const { isVisible, show, hide } = useIsVisible(false);
  const edit = supplierStore(state => state.editSupplier);
  const destroy = supplierStore(state => state.removeSupplier);
  const deleteSupplier = useCallback((id: string) => {
    destroy(id);
    toast.success('Fornecedor excluído', { autoClose: 2500 });
  }, []);
  return (
    <CardUI>
      <CardContainerUI>
        <CardContainerHeaderUI>
          <CardTitle>{supplier.name}</CardTitle>
          <CardDescription>{supplier.description}</CardDescription>
        </CardContainerHeaderUI>
        <CardContainerContentUI>
          <div className="address">
            <div className="address-header">
              <h4>Address</h4>
              <OpenMapButton address={supplier.address} />
            </div>
            <div className="address-content">
              {Object.entries(supplier.address).map(([key, value]) => (
                <p key={key} className="address-field">
                  <strong>{key}:</strong>
                  <label>{value}</label>
                </p>
              ))}
            </div>
          </div>
          <div className="contacts">
            <h4>Contacts</h4>
            <ScrollArea>
              <div className="contacts-container">
                {supplier.contacts.map((contact, index) => (
                  <div key={index} className="contact">
                    <p>{contact.name}</p>
                    <div className="phone-container">
                      <p>{contact.phone}</p>
                      <ButtonUI onClick={() => useGoToWhatsApp(contact.phone)}>
                        <BsWhatsapp />
                      </ButtonUI>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContainerContentUI>
        <CardFooter className="footer">
          <ButtonUI onClick={show}>
            <IoPencil />
          </ButtonUI>
          <Modal isVisible={isVisible} closeModal={hide}>
            <SupplierForm edit={edit} supplier={supplier} hide={hide} />
          </Modal>
          <ButtonUI onClick={() => deleteSupplier(supplier.id)}>
            <IoTrash />
          </ButtonUI>
        </CardFooter>
      </CardContainerUI>
    </CardUI>
  );
};

export default SupplierCard;
