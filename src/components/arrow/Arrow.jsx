import { useEffect, useState } from "react";
import { ScrollArrow, Arrow } from "./styled";
import { BiUpArrow } from "react-icons/bi";

export default function scrollArrow() {
    const [arrow, setArrow] = useState(false);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setArrow(true);
            }
            else {
                setArrow(false);
            }
        });
    }, []);
    
    return(
        <>
            {arrow && (
                <ScrollArrow onClick={scrollTop}>
                    <Arrow>
                        <BiUpArrow/>
                    </Arrow>
                </ScrollArrow>
            )}
        </>
    )
}