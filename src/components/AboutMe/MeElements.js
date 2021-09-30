import {
  MdArrowForward,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import styled from 'styled-components';

export const MeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`
export const MeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const MeContent = styled.div`
  position: absolute;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  padding: 8px 24px;
  align-items: center;
  z-index: 3;
`
export const MeH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 60px;
  
  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
  @media screen and (max-width: 480px) {
    font-size: 34px;
  }
`
export const MeP = styled.p`
  color: #fff;
  margin-top: 24px;
  font-size: 32px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
export const MeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`