
const FoodCard = ({item}) => {

    const {name, price, image, recipe} = item;

    return (
        <div className="card border w-[70%] md:w-[90%] lg:w-auto mx-auto">
        <figure className="relative">
          <img
            src={image}
            alt="Shoes"
            className="rounded-t-xl w-full h-52 lg:h-72 object-cover brightness-50"
          />
        </figure>
          <p className="absolute right-5 top-5 text-lg font-bold bg-slate-700 px-2 rounded-md text-white">${price}</p>
        <div className="flex flex-col text-center items-center px-5 py-3 space-y-3 lg:space-y-4">
          <h2 className="card-title text-lg lg:text-2xl font-bold">{name}</h2>
          <p className='text-sm lg:text-lg font-medium text-gray-400'>{recipe}</p>
        <button className="px-5 py-3 bg-orange-700 shadow-2xl mt-10 rounded-md text-sm lg:text-lg font-semibold lg:font-bold text-white">Add To Cart</button>
        </div>
      </div>
    );
};

export default FoodCard;