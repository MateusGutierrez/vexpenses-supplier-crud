import styled from 'styled-components';

export const HeaderSupplier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  height: fit-content;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    gap: 1rem;
    .add-download {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  button {
    height: 30px;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 680px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const ListUI = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
