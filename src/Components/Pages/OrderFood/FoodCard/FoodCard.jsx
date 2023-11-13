import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({item}) => {

  const {user} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

    const {name, price, image, recipe, _id} = item;

    const handelAddToCart = () =>{
      if(user && user.email){
        const cartItem = {
          menuId: _id,
          userEmail: user.email,
          name,
          image,
          price,
          recipe
        };

        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          if(res.data.insertedId){
            Swal.fire({
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1000
            });
            refetch()
          }
        })

      }
      else{
        navigate(location?.state ? location.state : '/login')
      }
    }

    return (
        <div className="w-[70%] md:w-[90%] lg:w-auto mx-auto shadow-md rounded-md">
        <div className="relative">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-t-xl w-full h-52 lg:h-72 object-cover brightness-50"
          />
        </figure>
          <p className="absolute right-5 top-5 text-lg font-bold bg-slate-700 px-2 rounded-md text-white">${price}</p>
        </div>
        <div className="flex flex-col text-center p-5 border h-52">
          <div className="space-y-2 flex-1">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-500">{recipe}</p>
          </div>
            <button onClick={handelAddToCart} className="bg-slate-700 px-2 py-1 w-fit rounded-md text-white">Add To Cart</button>
        </div>
      </div>
    );
};

export default FoodCard;