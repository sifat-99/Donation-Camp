import Card from "./SingleCard/Card";
import PropTypes from 'prop-types'




const AllCategoryCards = ({cards,search}) => {


    return (
        <div>
            <div className="grid grid-cols-4 gap-7 mx-auto mt-9 mb-48">
                {
                    cards.filter(card => card.title.toLowerCase().includes(search)).map(card => <Card key={card.id} card={card}></Card>)
                }
        </div>
        
        </div>
    );
};

AllCategoryCards.propTypes = {
    cards: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
}

export default AllCategoryCards;