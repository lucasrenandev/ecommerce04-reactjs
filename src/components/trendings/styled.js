import styled from "styled-components";

export const Trendings = styled.section`

`
export const TrendingsContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    gap: 2rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`
export const Box = styled.div`
`
export const Image = styled.figure`
    position: relative;
    height: 45rem;
    margin-bottom: 1.2rem;
    span {
        position: absolute;
        top: 3rem;
        left: 2.5rem;
        background-color: #27b737;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: #fff;
        text-transform: uppercase;
    }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.4s ease;
    &:hover {
        transform: scale(0.9);
    }
`
export const Stars = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
        font-size: 2rem;
    }
`
export const Star = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    i {
        color: #ff8c00;
        font-size: 1.8rem;
    }
`
export const H3 = styled.h3`
    font-size: var(--p-font);
    font-weight: 400;
    text-transform: capitalize;
    margin: 0.5rem 0 0.8rem;
`
export const H4 = styled.h4`
    font-size: 1.4rem;
    font-weight: 600;
`