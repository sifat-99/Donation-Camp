import { useLoaderData } from "react-router-dom";
// import AllCategoryCards from "../AllCategoryDataCards/AllCategoryCards";
import Banner from "../Header/Banner/Banner";




const Home = () => {
    const cards = useLoaderData();



    return (
        <div className=" px-4 md:px-12 lg:px-36 mx-auto">
            <Banner cards={cards}></Banner>
            {/* <AllCategoryCards cards={cards}></AllCategoryCards> */}
        </div>
    );
};

export default Home;