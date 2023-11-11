import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImage from '../../../../assets/assets/menu/banner3.jpg';
import dessertImg from '../../../../assets/assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../../assets/assets/menu/pizza-bg.jpg';
import saladImg from '../../../../assets/assets/menu/salad-bg.jpg';
import soupImg from '../../../../assets/assets/menu/soup-bg.jpg';
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import OurMenu from "../../Home/OurMenu/OurMenu";


const Menu = () => {

    const [menus] = useMenu();
    const offeredItems = menus.filter(item => item.category === 'offered');
    const dessertItems = menus.filter(item => item.category === 'dessert');
    const pizzaItems = menus.filter(item => item.category === 'pizza');
    const saladItems = menus.filter(item => item.category === 'salad');
    const soupItems = menus.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Menu</title>
            </Helmet>
            <Cover img={coverImage} title={'Our Memu'} subTitle={'Would you like to try a dish?'} />

            {/* Offered Menu */}
            <div className="container mx-auto mt-32 mb-16">
                <SectionTitle heading={"Today's Offer"} subHeading={"Don't miss"} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10">
                    {
                        offeredItems.map(item => <OurMenu key={item._id} item={item} />)
                    }
                </div>
            </div>

            {/* Desserts Items */}
            <div className="mt-32 mb-16">
                <Cover img={dessertImg} title={'Desserts'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10 mt-24">
                    {
                        dessertItems.slice(0,8).map(item => <OurMenu key={item._id} item={item} />)
                    }
                </div>
            </div>

            {/* Pizza Items */}
            <div className="mt-32 mb-16">
                <Cover img={pizzaImg} title={'Pizza'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10 mt-24">
                    {
                        pizzaItems.slice(0,8).map(item => <OurMenu key={item._id} item={item} />)
                    }
                </div>
            </div>

            {/* Salad Items */}
            <div className="mt-32 mb-16">
                <Cover img={saladImg} title={'Salad'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10 mt-24">
                    {
                        saladItems.slice(0,8).map(item => <OurMenu key={item._id} item={item} />)
                    }
                </div>
            </div>

            {/* Soup Items */}
            <div className="mt-32 mb-16">
                <Cover img={soupImg} title={'Soup'} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10 mt-24">
                    {
                        soupItems.slice(0,8).map(item => <OurMenu key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;