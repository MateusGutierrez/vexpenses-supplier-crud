import styled from 'styled-components';

export const HeaderUI = styled.header`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid hsl(var(--secondary));
  div.header-container {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 450px) {
    height: fit-content;
    padding: 1rem;
    div.header-container {
      width: 95%;
      gap: 1rem;
      flex-direction: column;
      h2 {
        text-align: center;
      }
    }
  }
`;
