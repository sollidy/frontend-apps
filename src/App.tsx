import styled from '@emotion/styled'
import { Card } from './components/Card';
import { Header } from './components/Header';
import { travelData } from './data';


const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const MainWrapper = styled.div`
  width: 550px;
  background-color: #FFFFFF;
  padding-bottom: 25px;
`
const cards = travelData.map(e=> {
  return (
    <Card key={e.id} {...e}/>
  )
})

function App() {
  return (
    <MainContainer>
      <MainWrapper>
        <Header />
        {cards}
      </MainWrapper>
    </MainContainer>
  );
}

export default App;

