import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const UserReview = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/allComment')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
        <div>
            <SectionTitle heading={"Testimonials"} subHeading={"What Our Clients Say"} />
            <div className="w-[90%] lg:w-[50%] mx-auto">
                <Slider {...settings}>
                    {
                        reviews.map(review => <div className="flex justify-center px-5 lg:px-0" key={review._id}>
                            <div className="text-center space-y-5">
                            <div className="w-fit mx-auto">
                            <Rating style={{ maxWidth: 200, border: 'none' }} value={review.rating} />
                            </div>
                            <p className="text-lg font-medium text-gray-400 text-justify lg:text-center">{review.details}</p>
                            <h1 className="text-3xl font-bold text-orange-700">{review.name}</h1>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default UserReview;