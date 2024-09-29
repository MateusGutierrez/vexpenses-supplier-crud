import styled from 'styled-components';

export const FormContainerUI = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  div {
    color: hsl(var(----foreground));
    padding: 20px;
    text-align: start;
  }
`;
