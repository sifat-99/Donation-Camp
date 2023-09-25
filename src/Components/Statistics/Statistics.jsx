import { useLoaderData } from "react-router-dom";
import PIchart from "../PIchart";




const Statistics = () => {
    let totalAmount = 0;
    const allCards = useLoaderData();
    allCards.forEach(element => {
        totalAmount +=(element.donation_amount);
        
    });
    // console.log(totalAmount);
    return (
        <div className="flex justify-center items-center">
            <PIchart totalAmount={totalAmount}></PIchart>
        </div>
    );
};

export default Statistics;