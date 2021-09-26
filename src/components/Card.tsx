import { StyledCard } from "./styled/Card.styled"

interface CardItem {
    item: {
        id: number,
        title: string,
        body: string,
        image: string
    }
}
export const Card: React.FC<CardItem> = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCard layout={id % 2 === 0 ? 'row-reverse' : 'row'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt='' />
            </div>
        </StyledCard>

    );
};

export default Card;