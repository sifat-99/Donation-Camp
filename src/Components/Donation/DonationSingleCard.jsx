import PropTypes from 'prop-types'

const DonationSingleCard = ({SingleCard}) => {
    const { title, image, bg_color, button_color, text_color, button_text,donation_amount } =SingleCard || {};
    return (
        <div
        style={{background: `${bg_color}`}} 
        className='flex rounded-lg'>
        <div>
            <img className='w-56 h-full' src={image} alt="" />
        </div>
        <div className='pl-5 pt-4 pb-2'>
            <button className='px-2 py-2 rounded-lg'  style={{background: `${button_color}`, color: `${text_color}`}}>{button_text}</button>
            <h1 className=' text-2xl mt-2 text-[#0B0B0B] font-semibold'>{title}</h1>
            <p className='mt-2' style={{color: `${text_color}`}}>$ {donation_amount}.00</p>
            <button style={{background: `${button_color}`}} className='btn text-white font-semibold text-lg mt-5'>View Details</button>
        </div>
        </div>
    );
};

DonationSingleCard.propTypes = {
    SingleCard: PropTypes.object.isRequired,
}
export default DonationSingleCard;