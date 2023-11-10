import img from '../../../../assets/assets/home/slide5.jpg';

const RecommededChef = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto gap-5
    '>
      <div className="card border md:w-96 lg:w-auto mx-auto">
        <figure>
          <img
            src={img}
            alt="Shoes"
            className="rounded-t-xl w-full h-52 lg:h-72 object-cover"
          />
        </figure>
        <div className="flex flex-col text-center items-center px-5 py-3 space-y-3 lg:space-y-4">
          <h2 className="card-title text-lg lg:text-2xl font-bold">Caeser Salad</h2>
          <p className='text-sm lg:text-lg font-medium text-gray-400'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <button className="px-5 py-3 bg-orange-700 shadow-2xl mt-10 rounded-md text-sm lg:text-lg font-semibold lg:font-bold text-white">Buy Now</button>
        </div>
      </div>
      <div className="card border md:w-96 lg:w-auto mx-auto">
        <figure>
          <img
            src={img}
            alt="Shoes"
            className="rounded-t-xl w-full h-52 lg:h-72 object-cover"
          />
        </figure>
        <div className="flex flex-col text-center items-center px-5 py-3 space-y-3 lg:space-y-4">
          <h2 className="card-title text-lg lg:text-2xl font-bold">Caeser Salad</h2>
          <p className='text-sm lg:text-lg font-medium text-gray-400'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <button className="px-5 py-3 bg-orange-700 shadow-2xl mt-10 rounded-md text-sm lg:text-lg font-semibold lg:font-bold text-white">Buy Now</button>
        </div>
      </div>
      <div className="card border md:w-96 lg:w-auto mx-auto">
        <figure>
          <img
            src={img}
            alt="Shoes"
            className="rounded-t-xl w-full h-52 lg:h-72 object-cover"
          />
        </figure>
        <div className="flex flex-col text-center items-center px-5 py-3 space-y-3 lg:space-y-4">
          <h2 className="card-title text-lg lg:text-2xl font-bold">Caeser Salad</h2>
          <p className='text-sm lg:text-lg font-medium text-gray-400'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <button className="px-5 py-3 bg-orange-700 shadow-2xl mt-10 rounded-md text-sm lg:text-lg font-semibold lg:font-bold text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default RecommededChef;
