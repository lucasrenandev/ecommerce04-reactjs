import { useEffect } from "react";
import { Reviews, ReviewsContent, H3, Image, 
Paragraph, H4, H5 } from "./styled";
import team1 from "../../assets/team-1.jpg";

export default function reviews() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".reviews", {delay: 300, origin: "bottom"});
    }, []);

    return(
        <Reviews className="reviews">
            <ReviewsContent>
                <H3>Client reviews</H3>
                <Image>
                    <img src={team1} alt="Team 1" />
                </Image>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ducimus quo optio magni maiores ab aspernatur rerum, magnam consequuntur repudiandae, ut odit animi non nisi. Sequi, quae. Quae, omnis nihil?</Paragraph>
                <H4>Mark jevenue</H4>
                <H5>CEO of Addle</H5>
            </ReviewsContent>
        </Reviews>
    )
}