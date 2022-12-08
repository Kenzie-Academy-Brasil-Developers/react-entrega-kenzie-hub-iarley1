import styled from "styled-components";

export const StyleDashboard = styled.div `
    width: 100%;
    height: 100vh;
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-grey-3);
        padding: 0 10px;
    }
    
    header > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1440px;
        height: 72px;
    }

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

    .info {
        display: flex;
        padding: 0 10px;
    }
    
    .info div > h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        color: var(--color-grey-0);
        margin-top: 10px;
    }

    .info div > p {
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: var(--color-white-fixed);
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
        .info div {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 1440px;
        }
        .user-profiles div > h2 {
            font-size: 24px;
        }
        .user-profiles div > p {
            font-size: 16px;
        }
        .info div > h3 {
            font-size: 22px;
        }
        .info div > p {
            font-size: 16px;
        }
    }
`