

const Navbar = () => {
    return (
        <div className="flex justify-between items-center pt-12">
            <div>
                <img src="/public/Logo.png" alt="" />
            </div>
            <div>
                <ul className="flex gap-12">
                    <li>Home</li>
                    <li>Donation</li>
                    <li>Statistics</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;