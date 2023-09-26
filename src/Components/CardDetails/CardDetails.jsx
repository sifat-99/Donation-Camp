import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CardDetails = () => {
    const [card, setCard] = useState({});
    const params = useParams();
    const Card = useLoaderData();
    useEffect(() => {
    const cardDetails = Card.find((card) => card.id == params.id);
    setCard(cardDetails);
    }, [params.id, Card]);

    const handleAddDonation = () => {
        const addDonationStorage = [];
        const donation = JSON.parse(localStorage.getItem('donation'));
        if(!donation){
            addDonationStorage.push(card);
            localStorage.setItem('donation', JSON.stringify(addDonationStorage));
            swal("Thanks!", "Thank you for your Donation!", "success");
        }
        else{
            const donation = JSON.parse(localStorage.getItem('donation'));
            const exist = donation.find(pd => pd.id === card.id);
            if(!exist){
                const newDonation = [...donation, card];
                localStorage.setItem('donation', JSON.stringify(newDonation));
                swal("Thanks!", "Thank you for your Donation!", "success");
            }
            else
            {
                swal("Sorry!", "You have already donated!", "error");
            }
        }
    }
    return (
        <div className=" px-4 md:px-8 lg:px-32 mt-20">
        <div className="relative grid h-[40rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center">
        <div
            style={{ backgroundImage: `url(${card.image})` }}
            className={`absolute inset-0 m-0 w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
        >
            <div className=" absolute bottom-0 flex items-start bg-black opacity-70 h-44 bg-transparent w-full"></div>
            <button
            onClick={handleAddDonation}
            style={{ background: `${card.text_color}` }}
            className=" py-4 px-6 rounded-lg absolute bottom-12 left-12 text-white font-bold normal-case text-xl"
            >
            Donate: $ {card.donation_amount}
            </button>
        </div>
        </div>

        <div className=" mt-14">
        <h1 className=" text-5xl text-[#0B0B0B]">{card.title}</h1>
        <p className=" text-base text-[#0B0B0BB2] text-justify mt-6">
            {card.description}
        </p>
        </div>
        <Link to={'/'}><button className="btn btn-primary mt-12">Back to Home</button></Link>
    </div>
    );
};

export default CardDetails;
