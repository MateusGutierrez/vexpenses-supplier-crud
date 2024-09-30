import styled from 'styled-components';

export const CardContainerUI = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: hsl(var(--form));
  .footer {
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 1180px) {
    .footer {
      padding-top: 1rem;
    }
  }
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
export const CardContainerHeaderUI = styled.div`
  width: 15%;
  @media (max-width: 1180px) {
    padding-bottom: 1rem;
    width: unset;
    text-align: center;
  }
`;
export const CardContainerContentUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  gap: 1rem;
  .address {
    display: flex;
    flex-direction: column;
    .address-header {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .address-content {
      display: flex;
      padding-left: 1rem;
      gap: 1rem;
      .address-field {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .contacts {
    .contacts-container {
      display: flex;
      gap: 1rem;
      padding-left: 1rem;
      .contact {
        flex-shrink: 0;
        min-width: 200px;
        width: 200px;
        .phone-container {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }
    }
  }
  @media (max-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    .address {
      align-items: flex-start;
    }
    .address-content {
      flex-direction: column;
    }

    .contacts-container {
      max-height: 400px;
      flex-direction: column;
    }
  }
  @media (max-width: 660px) {
    flex-direction: column;
    .contacts-container {
      flex-direction: column;
      max-height: 200px;
      max-width: unset;
      .contact {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    .contacts-container {
      flex-direction: column;
      max-height: 200px;
      max-width: unset;
      .contact {
        width: unset !important;
        min-width: unset !important;
        flex-direction: column;
        .phone-container {
          display: flex;
          flex-direction: column;
          padding: unset;
          align-items: start !important;
        }
      }
    }
  }
`;
