import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: hsl(var(--form));
  border-radius: 8px;
  max-width: fit-content;
  width: 100%;
  z-index: 1000;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;
