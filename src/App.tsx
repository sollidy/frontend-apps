import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { useState } from 'react';
import styled from '@emotion/styled'
import switcher from './assets/img/switcher.png'

export interface ThemeProps {
  isWhite: boolean
}

const MainContainer = styled.div`
  display        : flex;
  align-items    : center;
  justify-content: center;
  margin         : 40px 0;
  @media screen and (max-width: 480px) {
    margin         : 0;
  }
`
const MainBlock = styled.div<ThemeProps>`
  position: relative;
  width              : 320px;
  background-color   : ${props => props.isWhite ? '#F5F5F5' : '#1a1b21'};
  border-radius      : 8px;
  box-shadow         : 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  @media screen and (max-width: 480px) {
    box-shadow         : none;
    width: 100%
  }
`
const Switcher = styled.img`
  position:absolute;
  top: 10px;  
  left: 10px;
  width: 24px;
  cursor: pointer;
`

function App() {

  const [isWhite, setIsWhite] = useState(false);
  const switchTheme = () => {
    setIsWhite(!isWhite)
  }

  return (
    <MainContainer>
      <MainBlock isWhite={isWhite}>
        <Switcher src={switcher} onClick={switchTheme} />
        <Main isWhite={isWhite} />
        <Footer isWhite={isWhite} />
      </MainBlock>
    </MainContainer>
  );
}

export default App;

