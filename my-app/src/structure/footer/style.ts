import styled from 'styled-components';

export const FooterUI = styled.footer`
  height: 60px;
  width: 100%;
  border-top: 1px solid hsl(var(--secondary));
  div.footer-container {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 450px) {
    height: fit-content;
    padding: 1rem;
    .footer-container {
      flex-direction: column;
    }
  }
`;
