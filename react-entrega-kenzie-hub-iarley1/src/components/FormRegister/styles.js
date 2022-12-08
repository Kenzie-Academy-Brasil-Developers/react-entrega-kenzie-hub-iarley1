import styled from "styled-components";

export const StyleRegisterForm = styled.form `
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 90%;
    background-color: var(--color-grey-3);
    max-width: 400px;
    padding: 30px 15px;
    margin-top: 10px;

    input {
        width: 100%;
        height: 38.38px;
        background-color: var(--color-grey-2);
        border: 0.973988px solid var(--color-grey-2);
        border-radius: 3.1px;
        padding: 0 12px;
        color: var(--color-grey-0);
    }

    input::placeholder {
        color: var(--color-grey-1);
    }

    label {
        margin-top: 15px;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 0px;
        color: var(--color-grey-0);
    }

    p {
        color: var(--color-negative);
        font-size: 13px;
    }

    select {
        width: 100%;
        height: 38.38px;
        background: var(--color-grey-2);
        border: 0.9px solid var(--color-grey-2);
        border-radius: 3.1px;
        color: var(--color-grey-1);
        padding: 0 10px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        width: 100%;
        height: 38.38px;
        background: var(--color-primary);
        border: 1.2px solid var(--color-primary);
        border-radius: 4px;
        color: var(--color-white-fixed);
        cursor: pointer;
    }
`