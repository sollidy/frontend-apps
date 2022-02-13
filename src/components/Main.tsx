import me from "../assets/img/me.jpg"
import styled from '@emotion/styled'
import { ThemeProps } from "../App"

const MainImg = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media screen and (max-width: 480px) {
    border-top-right-radius: 0;
    border-top-left-radius: 0; 
  }
`
const TopTextContainer = styled.div`
  display        : flex;
  justify-content: center;
  align-items    : center;
  flex-direction : column;
  margin-top     : 25px;
`
const TopTextH1 = styled.h1<ThemeProps>`
  line-height: 30px;
  color      : ${props => props.isWhite ? '#2B283A' : '#FFFFFF'};
  font-size  : 25px;
  margin     : 0; 
`
const TopTextH2 = styled.h1<ThemeProps>`
  font-weight: normal;
  font-size  : 12px;
  line-height: 15px;
  color      : ${props => props.isWhite ? '#F47D27' : '#F3BF99'};
  margin     : 0;
  margin-top : 10px;
`
const TopTextLink = styled.a<ThemeProps>`
  font-weight    : normal;
  font-size      : 11px;
  line-height    : 150%;
  text-decoration: none;
  color          : ${props => props.isWhite ? '#4A4E74' : '#F5F5F5'};
  margin         : 0;
  margin-top     : 10px;
`
const ButtonProfile = styled.button`
  width           : 80%;
  height          : 35px;
  background-color: #FFFFFF;
  border          : solid 1px #D1D5DB;
  border-radius   : 6px;
  margin-top      : 18px;
  margin-bottom   : 20px;
  font-size       : 14px;
  color           : #374151;
  cursor          : pointer;
`
const SecondTextContainer = styled.div<ThemeProps>`
  display        : flex;
  flex-direction : column;
  justify-content: flex-start;
  padding        : 10px 35px;
  color          : ${props => props.isWhite ? '#4A4E74' : '#DCDCDC'};
`
const SecondTextH2 = styled.h2<ThemeProps>`
  font-weight: bold;
  font-size  : 16px;
  line-height: 150%;
  color      : ${props => props.isWhite ? '#2B283A' : '#F5F5F5'};
  margin     : 0;
`
const SecondTextH3 = styled.h3`
  font-weight  : normal;
  font-size    : 10.24px;
  line-height  : 150%;
  margin       : 0;
  margin-bottom: 25px;
`

export const Main = ({ isWhite }: ThemeProps) => {
  function handleClick() {
    window.location.href = 'https://t.me/rephones'
  }

  return (
    <main>
      <MainImg src={me} alt="profile" />
      <TopTextContainer>
        <TopTextH1 isWhite={isWhite}>Mark Pavlov</TopTextH1>
        <TopTextH2 isWhite={isWhite}>FrontEnd developer</TopTextH2>
        <TopTextLink isWhite={isWhite} href="https://github.com/m7mark">github.com/m7mark</TopTextLink>
        <ButtonProfile onClick={handleClick}>Telegram</ButtonProfile>
      </TopTextContainer>
      <SecondTextContainer isWhite={isWhite}>
        <SecondTextH2 isWhite={isWhite}>About</SecondTextH2>
        <SecondTextH3>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</SecondTextH3>
        <SecondTextH2 isWhite={isWhite}>Interests</SecondTextH2>
        <SecondTextH3>Sportsmen. Beliver. Travel geek. Trash talker</SecondTextH3>
      </SecondTextContainer>
    </main>
  )
}