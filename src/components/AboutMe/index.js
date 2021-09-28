import { ArrowForward, ArrowRight, MeBg, MeBtnWrapper, MeContainer, MeContent, MeH1, MeP, VideoBg } from "./MeElements";
import Video from '../../video/video.mp4'
import { useState } from "react";
import { Button } from "../Button.Element";

export const AboutMe = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <MeContainer id='home'>
            <MeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </MeBg>
            <MeContent>
                <MeH1>Hi, my name is Mark</MeH1>
                <MeP>I'm the Node.js Developer</MeP>
                <MeBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} >Get started{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </MeBtnWrapper>
            </MeContent>
        </MeContainer>
    );
};