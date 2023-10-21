import styled from "styled-components";
import background from "../../assets/banner-3.png";

export const Home = styled.section`
    position: relative;
    height: 100vh;
    background: url(${background})
    no-repeat center center / cover;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 991px) {
        height: 80vh;
    }
    @media (max-width: 480px) {
        height: 70vh;
    }
`
export const HomeText = styled.main`
    width: 60rem;
    height: auto;
    @media (max-width: 991px) {
        width: 50rem;
    }
    @media (max-width: 480px) {
        width: 40rem;
    }
`
export const H3 = styled.h3`
    font-size: var(--p-font);
    font-weight: 500;
    color: var(--hover-color);
`
export const H1 = styled.h1`
    font-size: var(--h1-font);
    font-weight: 600;
    color: var(--text-color);
    text-transform: capitalize;
    line-height: 1.1;
    margin: 0.5rem 0 1rem;
`
export const Paragraph = styled.p`
    font-size: 2rem;
    font-weight: 400;
    color: #333c56;
    text-transform: capitalize;
    font-style: italic;
`
export const Button = styled.a`
    display: inline-block;
    margin-top: 2rem;
    padding: 1.2rem 2.5rem;
    border: 0.2rem solid var(--text-color);
    font-size: var(--p-font);
    font-weight: 500;
    text-transform: capitalize;
    color: var(--text-color);
    transition: all 0.4s ease;
    i {
        display: inline-flex;
        vertical-align: middle;
        margin-left: 0.5rem;
        font-size: var(--p-font);
    }
    &:hover {
        background-color: var(--text-color);
        color: #fff;
    }
`
export const ScrollDown = styled.a`
    display: inline-block;
    position: absolute;
    bottom: 4.5rem;
    right: 11%;
    width: 5.8rem;
    height: 5.8rem;
    border: 0.2rem solid var(--text-color);
    border-radius: 50%;
    text-align: center;
    line-height: 6.2rem;
    i {
        font-size: 3rem;
        color: var(--text-color);
    }
    @media (max-width: 768px) {
        display: none;
    }
`