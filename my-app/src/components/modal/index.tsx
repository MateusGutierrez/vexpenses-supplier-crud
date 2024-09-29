import React from 'react';
import { Backdrop, HeaderContainer, ModalContent } from './style';
import { ButtonUI } from '../buttons/style';
import ScrollArea from '../scrollarea';
import { Card, CardContent, CardTitle } from '../card';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ isVisible, closeModal, children }) => {
  if (!isVisible) return null;
  return (
    <Backdrop onClick={closeModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Card>
          <HeaderContainer>
            <CardTitle>Add Suppliers</CardTitle>
            <ButtonUI onClick={closeModal}>
              <IoClose />
            </ButtonUI>
          </HeaderContainer>
          <CardContent>
            <ScrollArea>{children}</ScrollArea>
          </CardContent>
        </Card>
      </ModalContent>
    </Backdrop>
  );
};

export default Modal;
