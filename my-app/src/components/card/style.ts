import styled from 'styled-components';

export const CardUI = styled.div`
  border-radius: 0.5rem;
  border: 1px solid;
  background-color: var(--color-card);
  color: var(--color-card-foreground);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const CardHeaderUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

export const CardTitleUI = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

export const CardDescriptionUI = styled.p`
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
`;

export const CardContentUI = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

export const CardFooterUI = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;
