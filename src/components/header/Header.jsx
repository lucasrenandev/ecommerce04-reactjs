import { useEffect, useRef, useState } from "react";
import { Header, Logo, NavBar, NavList, List, NavLink, Icons, Icon } from "./styled";
import logoImg from "../../assets/logo.png";
import { BiSearch, BiUser, BiCart, BiMenu} from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<BiMenu/>);
    const headerRef = useRef(null);
    const navRef = useRef(null);

    const toggleMenu = () => {
        if(!navRef.current.classList.contains("active")) {
            navRef.current.classList.add("active");
            setMenuIcon(<IoClose/>);
        }
        else {
            navRef.current.classList.remove("active");
            setMenuIcon(<BiMenu/>);
        }
        
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            headerRef.current.classList.toggle("sticky", window.scrollY > 0);
            navRef.current.classList.remove("active");
            setMenuIcon(<BiMenu/>);
        });
    }, []);

    return(
        <Header ref={headerRef}>
            <Logo href="/">
                <img src={logoImg} alt="Logo" />
            </Logo>
            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <NavLink href="#">Home</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Shop</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Products</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Page</NavLink>
                    </List>
                    <List>
                        <NavLink href="#">Docs</NavLink>
                    </List>
                </NavList>
            </NavBar>
            <Icons>
                <Icon>
                    <BiSearch/>
                </Icon>
                <Icon>
                    <BiUser/>
                </Icon>
                <Icon>
                    <BiCart/>
                </Icon>
                <Icon onClick={toggleMenu} id="menu-icon">
                    {menuIcon}
                </Icon>
            </Icons>
        </Header>
    )
}