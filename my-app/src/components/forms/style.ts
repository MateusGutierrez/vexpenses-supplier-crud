import styled from 'styled-components';

export const FormUI = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%;
  min-width: fit-content;
  padding: 2rem;
  border: 1px solid hsl(var(--secondary));
  background-color: hsl(var(--form));
  border-radius: 0.5rem;
  min-height: fit-content;
  max-height: max-content;
  padding-bottom: 3rem;
  .submit {
    height: 40px;
  }
`;
