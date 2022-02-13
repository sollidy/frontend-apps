import styled from '@emotion/styled'
import { ThemeProps } from '../App'
import tw from '../assets/img/1.svg'
import fb from '../assets/img/2.svg'
import inst from '../assets/img/3.svg'
import ld from '../assets/img/4.svg'
import gh from '../assets/img/5.svg'

const MainFooter = styled.footer<ThemeProps>`
  height                    : 65px;
  display                   : flex;
  justify-content           : space-between;
  align-items               : center;
  background-color          : ${props => props.isWhite ? '#D5D4D8' : '#161619'};
  padding                   : 0 44px;
  margin                    : 0;
  border-bottom-left-radius : 8px;
  border-bottom-right-radius: 8px;
`
const FooterLink = styled.a`
  margin-top: 4px;
`

export const Footer = ({ isWhite }: ThemeProps) => {
  return (
    <MainFooter isWhite={isWhite}>
      <img src={tw} alt='twitter' />
      <img src={fb} alt='facebook' />
      <FooterLink href="https://www.instagram.com/rephone_nn" rel="noreferrer">
        <img src={inst} alt='instagram' />
      </FooterLink>
      <img src={ld} alt='linkedin' />
      <FooterLink href="https://github.com/m7mark" rel="noreferrer">
        <img src={gh} alt='github' />
      </FooterLink>
    </MainFooter>
  )
}