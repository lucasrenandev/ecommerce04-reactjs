import styled from "styled-components";

export const Reviews = styled.section`
    background-color: #f3f4f6;
`
export const ReviewsContent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const H3 = styled.h3`
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: capitalize;
`
export const Image = styled.figure`
    img {
        display: inline-block;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        object-fit: cover;
        margin: 1rem 0;
    }
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 400;
    line-height: 1.5;
    color: var(--other-color);
    max-width: 75rem;
`
export const H4 = styled.h4`
    font-size: 2.2rem;
    font-weight: 400;
    text-transform: capitalize;
    margin: 1rem 0 0.5rem;
`
export const H5 = styled.h5`
    font-size: var(--p-font);
    font-weight: 400;
    color: var(--other-color);
`