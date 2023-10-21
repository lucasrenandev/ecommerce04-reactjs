import styled from "styled-components";

export const Contact = styled.section`

`
export const ContactContent = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    text-align: center;
    gap: 2rem;
`
export const Address = styled.address`
    img {
        width: 12rem;
        height: auto;
        margin-bottom: 1rem;
    }
    p {
        font-style: normal;
    }
`
export const Paragraph = styled.p`
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--other-color);
`
export const Box = styled.div`
    
`
export const H3 = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
`
export const NavBar = styled.nav`

`
export const NavList = styled.ul`

`
export const List = styled.li`
    margin-bottom: 1.2rem;
`
export const NavLink = styled.a`
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--other-color);
    text-transform: capitalize;
    transition: color 0.4s ease;
    &:hover {
        color: var(--hover-color);
    }
`
export const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
export const Icon = styled.a`
    font-size: 2rem;
    color: var(--other-color);
    transition: all 0.4s ease;
    &:hover {
        transform: scale(1.05);
        color: var(--hover-color);
    }
`