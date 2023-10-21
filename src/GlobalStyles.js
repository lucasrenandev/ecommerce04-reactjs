import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Jost", sans-serif;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --bg-color: #f8f8f8;
        --hover-color: #ee1c47;
        --text-color: #111;
        --other-color: #707070;
        --h1-font: 6.5rem;
        --h2-font: 2.8rem;
        --p-font: 1.6rem;
        @media (max-width: 991px) {
            --h1-font: 5rem;
        }
        @media (max-width: 480px) {
            --h1-font: 4rem;
        }
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        @media (max-width: 991px) {
            font-size: 55%;
        }
        @media (max-width: 480px) {
            font-size: 50%;
        }
    }

    html::-webkit-scrollbar {
        width: 1.4rem;
    }

    html::-webkit-scrollbar-track {
        background-color: #fff;
        box-shadow: inset 0 0 5px #0005;
    } 

    html::-webkit-scrollbar-thumb {
        background-color: var(--other-color);
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        width: 100%;
        padding: 9rem 9% 8rem;
        @media (max-width: 991px) {
            padding: 7rem 2rem;
        }
        @media (max-width: 480px) {
            padding: 6rem 2rem;
        }
    }

    .heading {
        text-align: center;
        margin-bottom: 4rem;
    }

    .heading h2 {
        font-size: var(--h2-font);
        font-weight: 700;
        text-transform: capitalize;
    }

    .heading h2 span {
        color: var(--hover-color);
    }

`