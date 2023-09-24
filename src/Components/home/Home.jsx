import { useLoaderData } from "react-router-dom";
import AllCategoryCards from "../AllCategoryDataCards/AllCategoryCards";
import Banner from "../Header/Banner/Banner";




const Home = () => {
    const cards = useLoaderData();



    return (
        <div className=" max-w-7xl mx-auto">
            <Banner></Banner>
            <AllCategoryCards cards={cards}></AllCategoryCards>
        </div>
    );
};

export default Home;