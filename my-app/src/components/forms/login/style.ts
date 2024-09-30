import styled from "styled-components";

export const LinkUI = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: unset;
    a:-webkit-any-link{
        color: hsl(var(--foreground));
    }
    label{
        cursor: pointer;
        text-decoration: none;
        color: hsl(var(--foreground));
    }
`

export const InputContainerUI = styled.div`
    color: transparent !important;
    label, input{
        color: hsl(var(--foreground));
    }
`