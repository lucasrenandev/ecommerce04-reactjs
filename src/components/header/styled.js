import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 9%;
    transition: all 0.4s ease;
    &.sticky {
        background-color: #fff;
        padding: 1.6rem 9%;
        box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
        @media (max-width: 991px) {
            padding: 1.6rem 2rem;
        }
    }
    @media (max-width: 991px) {
        padding: 2rem 2rem;
    }
`
export const Logo = styled.a`
    img {
        width: 12rem;
        height: auto;
    }
`
export const NavBar = styled.nav`
    @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        right: -100%;
        background-color: #edfff1;
        width: 28rem;
        height: 100vh;
        padding: 12rem 0;
        transition: right 0.4s ease;
        &.active {
            right: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const List = styled.li`
    margin: 0 2rem;
    @media (max-width: 768px) {
        margin: 2rem 0;
    }
`
export const NavLink = styled.a`
    color: var(--text-color);
    font-size: var(--p-font);
    font-weight: 400;
    transition: color 0.4s ease;
    &:hover {
        color: var(--hover-color);
    }
    @media (max-width: 768px) {
        display: block;
        font-size: 2rem;
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`
export const Icon = styled.div`
    font-size: 2.4rem;
    line-height: 2rem;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        color: var(--hover-color);
        transform: scale(1.05);
    }
    &#menu-icon {
        z-index: 1010;
        font-size: 2.8rem;
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
`