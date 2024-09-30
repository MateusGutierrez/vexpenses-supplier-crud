import styled from 'styled-components';

export const FormContainerUI = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 1rem;
  .add-contact {
    margin-top: 1rem;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .remove-contact {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .contact-div {
    /* width: fit-content; */
    .contact-title {
      margin-bottom: 1rem;
    }
    .scroll-container {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 150px;
    }
  }
  .street-complement {
    display: flex;
    gap: 1rem;
  }
  .cep-city-state {
    display: flex;
    gap: 1rem;
    .field-cep {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 20%;
    }
    .field-state {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 15%;
    }
    .field-city {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 20%;
    }
  }
  .name-descr-container {
    display: flex;
    gap: 1rem;
  }
  .contact-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
  }
  input {
    color: hsl(var(--foreground));
    height: 40px;
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db;
    background-color: hsl(var(--form));
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    outline: none;
    &::placeholder {
      color: #9ca3af;
    }
    &:focus {
      border-color: hsl(var(--primary));
      outline-offset: 2px;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &[type='file'] {
      border: none;
      background: transparent;
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
  .finish {
    width: fit-content;
  }
`;
