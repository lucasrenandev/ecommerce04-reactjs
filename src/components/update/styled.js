import styled from "styled-components";

export const Update = styled.section`

`
export const UpdateContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    align-items: center;
    gap: 2rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`
export const Box = styled.div`

`
export const Image = styled.figure`

`
export const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: 0.4rem;
`
export const H4 = styled.h4`
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
    color: #333c56;
`
export const H3 = styled.h3`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
    margin: 1rem 0;
`
export const Paragraph = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--other-color);
    margin-bottom: 1rem;
`
export const H5 = styled.h5`
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: capitalize;
`