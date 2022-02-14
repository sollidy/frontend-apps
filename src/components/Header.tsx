import styled from '@emotion/styled'
import headerImg from '../assets/img/header.svg'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  background-color: #F55A5A;
  margin-bottom: 45px;
`
const Logo = styled.img`
  max-width: 100px;
  padding-right: 5px;
`
const LogoText = styled.span`
  font-size: 14px;
  color: #FFFFFF;
`

export const Header = () => {
  return (
    <Navbar>
      <Logo src={headerImg} alt='logo' />
      <LogoText>my travel journal.</LogoText>
    </Navbar >
  )
}