import styled from "styled-components";

export const StyledModal = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    padding: 0 10px;

    .modal-box {
        display: flex;
        flex-direction: column;
        background-color: var(--color-grey-3);
        width: 369px;
        height: 342px;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 0 20px;
        position: absolute;
        top: 170px;
        max-width: 100%;
    }

    .modal-box header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
    }

    .header-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        padding: 0 20px;
        background-color: var(--color-grey-2);
    }

    .header-div h3 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-grey-0);
    }

    .header-div button {
        width: 10px;
        background: none;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-grey-1);
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        gap: 20px;
    }

    form > label {
        font-weight: 400;
        font-size: 12px;
        line-height: 0px;
        color: var(--color-grey-0);
        margin-top:15px;
    }

    form > input {
        background-color: var(--color-grey-3);
        height: 48px;
        border: 1.2182px solid var(--color-grey-0);
        border-radius: 4px;
        padding: 0 10px;
        color: var(--color-grey-0);
        font-weight: 400;
        font-size: 16px;
    }

    form > input::placeholder {
        color: var(--color-grey-1);
    }
    
    form > select {
        background-color: var(--color-grey-3);
        height: 48px;
        border: 1.2182px solid var(--color-grey-0);
        border-radius: 4px;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-grey-0);
        padding: 0 10px;
    }

    .alert-title {
        position: absolute;
        top: 139px;
        color: var(--color-negative);
        font-size: 13px;
        left: 30px;
    }
    .alert-status {
        position: absolute;
        top: 242px;
        color: var(--color-negative);
        font-size: 13px;
        left: 30px;
    }

    form > button {
        height: 48px;
        background-color: var(--color-primary); 
        border: 1.2182px solid var(--color-primary);
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-white-fixed);
        cursor: pointer;
        margin-top: 20px;
    }

    @media (min-width: 750px) {
        padding: 0;
        
        .modal-box {
            top: 250px;
        }
    }
`