import { useEffect } from "react";
import { Update, UpdateContent, Box, Image, 
Img, H4, H3, Paragraph, H5 } from "./styled";
import up1 from "../../assets/bl-1.png";
import up2 from "../../assets/bl-2.png";
import up3 from "../../assets/bl-3.png";

export default function update() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".update", {delay: 300, origin: "bottom"});
    }, []);
    
    return(
        <Update className="update">
            <header className="heading">
                <h2>New updates</h2>
            </header>
            <UpdateContent>
                <Box>
                    <Image>
                        <Img src={up1} alt="Update 1"/>
                    </Image>
                    <H4>20 oct 2023</H4>
                    <H3>Let's start bring sale on this summer vacation.</H3>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus molestiae aut inventore, id quidem dolor odio iure, accusamus, voluptatum sit consequuntur sint perferendis deserunt voluptates. Libero quia cupiditate maxime?
                    </Paragraph>
                    <H5>Continue reading...</H5>
                </Box>
                <Box>
                    <Image>
                        <Img src={up2} alt="Update 2"/>
                    </Image>
                    <H4>20 oct 2023</H4>
                    <H3>Let's start bring sale on this summer vacation.</H3>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus molestiae aut inventore, id quidem dolor odio iure, accusamus, voluptatum sit consequuntur sint perferendis deserunt voluptates. Libero quia cupiditate maxime?
                    </Paragraph>
                    <H5>Continue reading...</H5>
                </Box>
                <Box>
                    <Image>
                        <Img src={up3} alt="Update 3"/>
                    </Image>
                    <H4>20 oct 2023</H4>
                    <H3>Let's start bring sale on this summer vacation.</H3>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem voluptatibus molestiae aut inventore, id quidem dolor odio iure, accusamus, voluptatum sit consequuntur sint perferendis deserunt voluptates. Libero quia cupiditate maxime?
                    </Paragraph>
                    <H5>Continue reading...</H5>
                </Box>
            </UpdateContent>
        </Update>
    )
}