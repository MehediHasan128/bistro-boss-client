import SectionTitle from '../SectionTitle/SectionTitle';
import './Featured.css'
import img from '../../../../assets/assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='backgroundImage py-32 bg-fixed text-white'>
            <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />
            <div className='container mx-auto flex justify-center items-center gap-10'>
                <div className='w-[50%]'>
                    <img src={img} alt="" />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-2xl font-semibold'>March 20, 2023 <br />WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="px-5 lg:px-8 py-3 lg:py-5 bg-orange-700 shadow-2xl mt-10 rounded-md text-sm lg:text-lg font-semibold lg:font-bold text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;