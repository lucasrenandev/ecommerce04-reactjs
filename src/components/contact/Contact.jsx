import { useEffect } from "react";
import { Contact, ContactContent, Address, Paragraph, 
Box, H3, NavBar, NavList, List, NavLink, Social, Icon } from "./styled";
import logoImg from "../../assets/logo.png";
import { BiLogoFacebook} from "react-icons/bi";
import { BiLogoTwitter} from "react-icons/bi";
import { BiLogoInstagramAlt} from "react-icons/bi";
import { BiLogoYoutube} from "react-icons/bi";
import { BiLogoLinkedin} from "react-icons/bi";

export default function contact() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".contact", {delay: 300, origin: "bottom"});
    }, []);

    return(
        <Contact className="contact">
            <ContactContent>
                <Address>
                    <img src={logoImg} alt="Logo" />
                    <Paragraph>3245 Grant Street Longview</Paragraph>
                    <Paragraph>TX United Kingdom 765378</Paragraph>
                    <Paragraph>01601348732</Paragraph>
                    <Paragraph>saidulahmed3080@gmail.com</Paragraph>
                    <Social>
                        <Icon href="#"><BiLogoFacebook/></Icon>
                        <Icon href="#"><BiLogoTwitter/></Icon>
                        <Icon href="#"><BiLogoInstagramAlt/></Icon>
                        <Icon href="#"><BiLogoYoutube/></Icon>
                        <Icon href="#"><BiLogoLinkedin/></Icon>
                    </Social>
                </Address>       
                <Box>
                    <H3>Support</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">Contact us</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">About page</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Size guide</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Shopping & Resturns</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Privacy</NavLink>
                            </List>
                        </NavList>
                    </NavBar>    
                </Box>             
                <Box>
                    <H3>Shop</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">Men's shopping</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Women's shopping</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Kid's shopping</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Furnitune</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Discount</NavLink>
                            </List>
                        </NavList>
                    </NavBar>    
                </Box>        
                <Box>
                    <H3>Company</H3>
                    <NavBar>
                        <NavList>
                            <List>
                                <NavLink href="#">About</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Blog</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Affiliate</NavLink>
                            </List>
                            <List>
                                <NavLink href="#">Login</NavLink>
                            </List>
                        </NavList>
                    </NavBar>    
                </Box>   
                <Box>
                    <H3>Subscribe</H3>
                    <Paragraph>
                        Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily
                    </Paragraph> 
                    <Paragraph>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, inventore.
                    </Paragraph> 
                    <Paragraph>
                        Receive Updates, Hot Deals, Discounts Sent Straight In Your Inbox Daily
                    </Paragraph> 
                </Box>   
            </ContactContent>
        </Contact>
    )
}