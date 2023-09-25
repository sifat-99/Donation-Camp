import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home";
import Donation from "../Donation/Donation";
import MainHeader from "../Header/MainHeader/MainHeader";
import Statistics from "../Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";
import ErrorPage from "../home/ErrorPage";


    const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainHeader></MainHeader>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
                {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch('/resources.json')
                },
                {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch('/resources.json')
                },
                {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: ()=> fetch('/resources.json')
                },
                {
                    path: "/details/:id",
                    element: <CardDetails></CardDetails>,
                    loader: ()=> fetch('/resources.json')
                }
            ]       
        },
    
    ]);

export default MyCreatedRouter;
