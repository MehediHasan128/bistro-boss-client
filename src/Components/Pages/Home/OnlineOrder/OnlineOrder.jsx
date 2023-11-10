import Slider from "react-slick";
import img1 from "../../../../assets/assets/home/slide1.jpg";
import img2 from "../../../../assets/assets/home/slide2.jpg";
import img3 from "../../../../assets/assets/home/slide3.jpg";
import img4 from "../../../../assets/assets/home/slide4.jpg";

const OnlineOrder = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <img className="w-full" src={img1} alt="" />
        <div className="absolute top-0 w-full h-full bg-black text-white opacity-0 hover:opacity-70 duration-700 cursor-pointer">
            <div className="flex justify-center items-center h-full">
                <h1 className="text-xl lg:text-3xl">Salad</h1>
            </div>
        </div>
      </div>
      <div className="relative">
        <img className="w-full" src={img2} alt="" />
        <div className="absolute top-0 w-full h-full bg-black text-white opacity-0 hover:opacity-70 duration-700 cursor-pointer">
            <div className="flex justify-center items-center h-full">
                <h1 className="text-xl lg:text-3xl">Pizza</h1>
            </div>
        </div>
      </div>
      <div className="relative">
        <img className="w-full" src={img3} alt="" />
        <div className="absolute top-0 w-full h-full bg-black text-white opacity-0 hover:opacity-70 duration-700 cursor-pointer">
            <div className="flex justify-center items-center h-full">
                <h1 className="text-xl lg:text-3xl">Soup</h1>
            </div>
        </div>
      </div>
      <div className="relative">
        <img className="w-full" src={img4} alt="" />
        <div className="absolute top-0 w-full h-full bg-black text-white opacity-0 hover:opacity-70 duration-700 cursor-pointer">
            <div className="flex justify-center items-center h-full">
                <h1 className="text-xl lg:text-3xl">desserts</h1>
            </div>
        </div>
      </div>
    </Slider>
  );
};

export default OnlineOrder;
