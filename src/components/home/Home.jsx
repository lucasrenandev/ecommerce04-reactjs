import { useEffect } from "react";
import { Home, HomeText, H3, H1, Paragraph, Button, ScrollDown } from "./styled";
import { BiRightArrowAlt, BiDownArrowAlt } from "react-icons/bi";

export default function home() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".home-text", {delay: 200, origin: "top"});
    }, []);

    return(
        <Home>
            <HomeText className="home-text">
                <H3>Winter Collection</H3>
                <H1>New winter collection 2023</H1>
                <Paragraph>There's nothing like trend</Paragraph>
                <Button href="#">
                    Show now
                    <i><BiRightArrowAlt/></i>
                </Button>
            </HomeText>
            <ScrollDown href="#">
                <i><BiDownArrowAlt/></i>
            </ScrollDown>
        </Home>
    )
}