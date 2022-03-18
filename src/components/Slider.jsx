import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SliderData } from "../data";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;  
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    top: 0;  
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.currentSlide * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg} 
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    text-transform: uppercase; 
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // const handleClick = (direction) => {

    //     if(direction === 'left') {
    //         setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    //     } else {
    //         setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0 )
    //     }
    // }

    const prevSlide = () => {
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0)
    }

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide]);


    return (
        <Container>
            <Arrow direction='left' onClick={prevSlide}>
                <ArrowBackRoundedIcon />
            </Arrow>
            <Wrapper currentSlide={currentSlide}>
                {SliderData.map((slide) => {
                    return (
                        <Slide bg={slide.bg} key={slide.id}>
                            <ImgContainer>
                                <Image src={slide.image} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{slide.heading}</Title>
                                <Desc>{slide.desc}</Desc>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                        </Slide>
                    );
                })}
            </Wrapper>
            <Arrow direction='right' onClick={nextSlide}>
                <ArrowForwardRoundedIcon />
            </Arrow>
        </Container>
    );
}

export default Slider;




// const Slider = () => {
//     return (
//         <Container>
//             <ArrowBackRoundedIcon />
//             <ArrowForwardRoundedIcon />

//             {SliderData.map((slide, index) => {
//                 return(

//                 );
//             })}

//         </Container>
//     );
// }

 
// export default Slider;