// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import DonationSingleCard from "./DonationSingleCard";

const Donation = () => {
  const [donationCard, setDonationCard] = useState([]);
  const [noData, setNoData] = useState("");

  // const allDonatedCard = localStorage.getItem('donatedCard');
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("donation"));
    if (donation) {
      setDonationCard(donation);
    } else {
      setNoData("No Data Found");
    }
  }, []);
  // const allDonatedCardParse = JSON.parse(allDonatedCard);
  console.log(isShow);
  return (
    <div>
      <div>
        {noData ? (
          <h1 className="text-6xl flex justify-center items-center mt-48">
            {noData}
          </h1>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 md:mx-14 lg:mx-32 mt-16">
            {isShow
              ? donationCard.map((card) => (
                  <DonationSingleCard
                    key={card.id}
                    SingleCard={card}
                  ></DonationSingleCard>
                ))
              : donationCard
                  .slice(0, 4)
                  .map((card) => (
                    <DonationSingleCard
                      key={card.id}
                      SingleCard={card}
                    ></DonationSingleCard>
                  ))}
          </div>
        )}
      </div>
      <div className=" flex justify-center items-center mt-5">
        {
          donationCard.length > 4 &&  <button onClick={() => setIsShow(!isShow)} className="btn px-4 py-2 bg-[#009444] font-bold text-xl normal-case text-white hover:text-black hover:bg-red-500">
          {isShow ? "See Less" : "See More"}
        </button>
        }
      </div>
    </div>
  );
};

export default Donation;
