import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainHeader = () => {
    return (
        <div>
            <div className="px-36">
            <Navbar></Navbar>
            
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainHeader;