import styled from "styled-components";

export const ButtonUI = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 0.25rem .5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: hsl(var(--primary) / 0.9);
  }

  &:focus {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;