// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import DonationSingleCard from "./DonationSingleCard";


const Donation = () => {
    const [donationCard, setDonationCard] = useState([]);
    const [noData, setNoData] = useState("");
    
    // const allDonatedCard = localStorage.getItem('donatedCard');

    useEffect(()=>{
        const donation = JSON.parse(localStorage.getItem('donation'));
        if(donation){
            setDonationCard(donation);
        }
        else
        {
            setNoData("No Data Found");
        }
    },[])
    // const allDonatedCardParse = JSON.parse(allDonatedCard);
    return (
        
            <div>
            {
                
                noData ? <h1 className="text-6xl flex justify-center items-center mt-48">{noData}</h1> : 
                <div className="grid grid-cols-2 gap-6 mx-32 mt-16">
                {
                    donationCard.map(card => <DonationSingleCard key={card.id} SingleCard={card}></DonationSingleCard>)
                }
                </div>
            }
            </div>
        
    );
};

export default Donation;