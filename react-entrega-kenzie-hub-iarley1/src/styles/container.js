import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--color-primary);
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
    }
    header > div {
        display: flex;
        justify-content: space-between;
        width: 90%;
        max-width: 400px;
    }
    header div > h1 {
        font-size: 28px;
    }
    header div > button {
        width: 85px;
        height: 31.95px;
        background-color: var(--color-grey-3);
        border-radius: 4px;
        font-weight: 600;
        font-size: 12px;
        line-height: 23px;
        color: var(--color-grey-0);
        border: none;
        cursor: pointer;
    }

    @media(min-width: 750px) {
    header div > h1 {
        font-size: 32px;
    }
    }
`