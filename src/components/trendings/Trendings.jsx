import { useEffect } from "react";
import { Trendings, TrendingsContent, Box, Image, Img, 
Stars, Star, H3, H4 } from "./styled";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import { BiStar, BiSolidStarHalf, BiHeart } from "react-icons/bi";

export default function trendings() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "5rem",
            duration: 2500,
            reset: true
        });
        sr.reveal(".trendings", {delay: 300, origin: "bottom"});
    }, []);

    return(
        <Trendings className="trendings">
            <header className="heading">
                <h2>Our trending <span>products</span></h2>
            </header>
            <TrendingsContent>
                <Box>
                    <Image>
                        <Img src={img1} alt="Trending 1"/>
                        <span>Sale</span>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img2} alt="Trending 2"/>
                        <span>New</span>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img3} alt="Trending 3"/>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img4} alt="Trending 4"/>
                        <span>Hot</span>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img5} alt="Trending 5"/>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img6} alt="Trending 6"/>
                        <span>Hot</span>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img7} alt="Trending 7"/>
                        <span>Sale</span>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
                <Box>
                    <Image>
                        <Img src={img8} alt="Trending 8"/>
                        <span>Sale</span>
                    </Image>
                    <Stars>
                        <Star>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiStar/></i>
                            <i><BiSolidStarHalf/></i>
                        </Star>
                        <i><BiHeart/></i>
                    </Stars>
                    <H3>Half running set</H3>
                    <H4>$99 - $129</H4>
                </Box>
            </TrendingsContent>
        </Trendings>
    )
}