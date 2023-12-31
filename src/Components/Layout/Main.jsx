import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;