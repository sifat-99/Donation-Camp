// import { useLoaderData } from "react-router-dom";


const Donation = () => {
    // const allCards = useLoaderData();
    const allDonatedCard = localStorage.getItem('donation');
    const allDonatedCardParse = JSON.parse(allDonatedCard);
    console.log(allDonatedCardParse)
    return (
        <div>
            
        </div>
    );
};

export default Donation;