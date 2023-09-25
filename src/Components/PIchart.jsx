import PropTypes from 'prop-types'

const PIchart = ({totalAmount}) => {
  // console.log(totalAmount)
  return (
    <div>
        <h1>{totalAmount}</h1>
    </div>
  );
};

PIchart.propTypes = 
{
  totalAmount: PropTypes.number
}

export default PIchart;