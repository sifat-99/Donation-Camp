import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center pt-12">
            <div>
                <img src="/Logo.png" alt="" />
            </div>
            <div>
                <ul className="flex gap-12">
                    <li> <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >Home</NavLink> </li>
                    <li> <NavLink to={'/donation'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >Donation</NavLink> </li>
                    <li> <NavLink to={'/statistics'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }
                    >Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;