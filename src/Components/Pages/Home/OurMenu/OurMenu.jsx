
const OurMenu = ({item}) => {

    const {name, recipe, image, price} = item;

    return (
        <div className="flex items-center md:w-[90%] lg:w-[80%] mx-auto gap-5 px-5 lg:px-0">
            <img className="rounded-r-full rounded-b-full brightness-50 w-16 h-16 lg:w-24 lg:h-24 object-cover" src={image} alt="" />
            <div>
                <h1 className="text-lg lg:text-xl font-bold">{name}---------</h1>
                <p className="text-xs lg:text-lg text-gray-600">{recipe}</p>
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-orange-700">${price}</h2>
        </div>
    );
};

export default OurMenu;