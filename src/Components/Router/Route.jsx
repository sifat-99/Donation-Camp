import { createBrowserRouter } from "react-router-dom";
import Home from "../home/home";
import Donation from "../Donation/Donation";
import MainHeader from "../Header/MainHeader/MainHeader";


  const MyCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainHeader></MainHeader>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch('/resources.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
        ]       
    },
    
  ]);

export default MyCreatedRouter;
