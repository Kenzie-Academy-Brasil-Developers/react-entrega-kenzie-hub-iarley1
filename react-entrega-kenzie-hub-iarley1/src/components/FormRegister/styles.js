import styled from "styled-components";

export const StyleFormDiv = styled.div `
  .spinner {
        width: 10px;
        height: 10px;
        border: 5px solid;
        border-radius: 50%;
        border-color: black #e6e6e6 #e6e6e6 #e6e6e6;
        animation: loading 0.4s infinite;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`