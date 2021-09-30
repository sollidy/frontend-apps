import { Button } from '../Button.Element';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRaw,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

export const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, lightTextDesc, description, buttonLabel, img, alt, primary, dark }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRaw imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='/home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >{buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRaw>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};