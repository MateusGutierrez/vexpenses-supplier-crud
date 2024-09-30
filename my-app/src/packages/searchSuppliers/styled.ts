import styled from 'styled-components';

export const FuzzyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  input {
    color: hsl(var(--foreground));
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
`;
