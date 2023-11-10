import Slider from "react-slick";
import img1 from '../../../../assets/assets/home/01.jpg';
import img2 from '../../../../assets/assets/home/02.jpg';
import img3 from '../../../../assets/assets/home/03.png';
import img4 from '../../../../assets/assets/home/04.jpg';
import img5 from '../../../../assets/assets/home/05.png';
import img6 from '../../../../assets/assets/home/06.png';

const Banner = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        speed: 2000
      };

    return (
        <Slider {...settings}>
            <div>
            <img src={img1} alt="" />
          </div>
            <div>
            <img src={img2} alt="" />
          </div>
            <div>
            <img src={img3} alt="" />
          </div>
            <div>
            <img src={img4} alt="" />
          </div>
            <div>
            <img src={img5} alt="" />
          </div>
            <div>
            <img src={img6} alt="" />
          </div>
        </Slider>
    );
};

export default Banner;