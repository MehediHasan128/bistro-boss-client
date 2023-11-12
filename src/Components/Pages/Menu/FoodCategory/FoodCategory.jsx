import { Link } from "react-router-dom";
import OurMenu from "../../Home/OurMenu/OurMenu";
import Cover from "../../Shared/Cover/Cover";

const FoodCategory = ({coverImg, items, heading}) => {
    return (
        <div>
            <Cover img={coverImg} title={heading} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:gap-10 mt-24">
                    {
                        items.slice(0,8).map(item => <OurMenu key={item._id} item={item} />)
                    }
                </div>
                <div className="w-fit mx-auto mt-16">
                <Link to={`/orderFood/${heading}`} className="border-b-4 shadow-xl bg-slate-100 hover:scale-105 duration-500 px-5 py-3 rounded-md text-lg font-semibold uppercase">Order Your Favourite Food</Link>
                </div>
                </div>
        </div>
    );
};

export default FoodCategory;