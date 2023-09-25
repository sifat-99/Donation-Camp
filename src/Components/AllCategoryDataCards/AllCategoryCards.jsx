import Card from "./SingleCard/Card";
import PropTypes from 'prop-types'




const AllCategoryCards = ({cards}) => {
    return (
        <div className="grid grid-cols-4 gap-7 mx-auto mt-9 mb-48">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
        </div>
    );
};

AllCategoryCards.propTypes = {
    cards: PropTypes.array.isRequired,
}

export default AllCategoryCards;