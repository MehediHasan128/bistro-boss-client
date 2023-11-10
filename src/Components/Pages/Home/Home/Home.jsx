import { useState } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect } from "react";
import OurMenu from "../OurMenu/OurMenu";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {


    const [menu, setMenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenu(data))
    },[]);


    return (
        <div>
            {/* Banner Section */}
            <Banner />
            {/* Popular Food */}
            <div className="container mx-auto mt-5 lg:mt-24">
                <SectionTitle heading={"Order Online"} subHeading={"From 11:00am to 10:00pm"} />
                <div className="md:w-[90%] lg:w-[80%] mx-auto">
                    <OnlineOrder />
                </div>
            </div>
            {/* About us section */}
            <div className="my-16 lg:my-24">
                <About />
            </div>
            {/* Our Menu Section */}
            <div className="container mx-auto">
            <div className="mt-5 lg:mt-24">
                <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10">
                {
                    menu.slice(0,8).map(item => <OurMenu key={item._id} item={item} />)
                }
            </div>
            <div className="w-fit mx-auto">
                <button className="px-5 lg:px-8 py-3 lg:py-5 bg-orange-700 shadow-2xl mt-10 rounded-md text-sm lg:text-lg font-semibold lg:font-bold text-white">View Full Menu</button>
            </div>
            </div>
            {/* Contact Section */}
            <div className="container mx-auto my-16">
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;