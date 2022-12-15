import styled from "styled-components";

export const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-grey-3);
    padding: 0 10px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1440px;
        height: 72px;
    }

    div > h1 {
        color: var(--color-primary);
    }

    div > button {
        width: 55px;
        height: 32px;
        background-color: var(--color-grey-3);
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        border: none;
        cursor: pointer;
        color: var(--color-grey-0);
    }
`