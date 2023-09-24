import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainHeader = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainHeader;