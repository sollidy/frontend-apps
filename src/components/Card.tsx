import styled from "@emotion/styled"
import location from '../assets/img/location.svg'
import { TravelData } from "../data"

const CardContainer = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: row;
`
const CardImage = styled.img`
  width: 125px;
  height: 168px;
  object-fit: cover;
  border-radius: 9px;
`
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  color: #2B283A;
  font-size: 10px;
`
const CardPositionContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
const CardPositionImg = styled.img`
`
const CardPositionCountry = styled.span`
  line-height: 12px;
  letter-spacing: 0.17em;
  padding-left: 4px;
`
const CardPositionLink = styled.a`
  color: #918E9B;
  padding-left: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 6px;
`
const CardDate = styled.p`
  font-weight: 600;
  margin: 0;
  margin-top: 20px;
`
const CardDesc = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 150%;
  margin: 0;
  margin-top: 8px;
`
const CardLine = styled.hr`
  margin: 18px 40px;
  border: none;
  border-top: 1px solid #F5F5F5;
`

export const Card = (props: TravelData) => {
  return (
    <>
      <CardContainer>
        <CardImage src={props.imageUrl} alt='map' />
        <CardTextContainer>
          <CardPositionContainer>
            <CardPositionImg src={location} alt='location' />
            <CardPositionCountry>{props.location}</CardPositionCountry>
            <CardPositionLink href={props.googleMapsUrl}>View on Google Maps</CardPositionLink>
          </CardPositionContainer>
          <CardTitle>{props.title}</CardTitle>
          <CardDate>{props.startDate} - {props.endDate}</CardDate>
          <CardDesc>{props.description}</CardDesc>
        </CardTextContainer>
      </CardContainer>
      {props.id < 3 && <CardLine />}
    </>
  )
}