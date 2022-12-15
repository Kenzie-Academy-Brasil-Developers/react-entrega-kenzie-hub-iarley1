import styled from "styled-components";

export const StyleDashboard = styled.div `
    width: 100%;
    height: 100vh;

    header div > h1 {
        color: var(--color-primary);
    }
    header div > button {
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
    .user-profiles {
        display: flex;
        
        border-bottom: 1px solid var(--color-grey-3);
    }
    .user-profiles div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        height: 100px;
        padding: 0 10px;
    }
    .user-profiles div > h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--color-grey-0);
    }
    .user-profiles div > p {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--color-grey-1);
    }

    h4 {
        color: #ffffff;
    }

    .info {
        display: flex;
        padding: 0 10px;
    }

    .info-box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    .info-box ul {
        display: flex;
        flex-direction: column;
        padding: 20px 10px;
        gap: 20px;
        width: 100%;
        background-color: var(--color-grey-3);
        max-width: 1440px;
    }

    .info-box ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        width: 100%;
        background-color: var(--color-grey-4);
        height: 48px;
        cursor: pointer;
    }
    .info-box ul > li:hover {
        background-color: var(--color-grey-2);
        transition: 0.3s;
    }

    .status {
        display: flex;
        justify-content: space-between;
        gap: 30px;
        align-items: center;
    }

    .status p {
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: var(--color-white-fixed);
    }

    .info-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
    }

    .info-header button {
        margin-top: 10px;
        width: 32px;
        height: 32px;
        background: var(--color-grey-3);
        border-radius: 4px;
        border: none;
        color: var(--color-white-fixed);
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
    }

    .info-header button:hover {
        background-color: var(--color-grey-2);
        transition: 0.3s;
    }
    
    .info-header > h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        color: var(--color-grey-0);
        margin-top: 10px;
    }

    span {
        color: var(--color-white-fixed);
        text-align: center;
        margin-top: 20px;
    }

    @media (min-width: 750px) {
        .user-profiles {
            align-items: center;
            justify-content: center;
        }
        .user-profiles div {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 1440px;
            height: 130px;
            padding: 0;
        }
        .info {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            margin-top: 25px;
        }
        .info-box {
            gap: 20px;
            width: 1440px;
            max-width: 100%;
        }
        .info-box ul {
            padding: 30px;
        }
        .info-box ul > li {
            padding: 0 30px;
        }
        .user-profiles div > h2 {
            font-size: 24px;
        }
        .user-profiles div > p {
            font-size: 16px;
        }
        .info-box h3 {
            font-size: 22px;
        }
        .info-box p {
            font-size: 16px;
        }
    }
`