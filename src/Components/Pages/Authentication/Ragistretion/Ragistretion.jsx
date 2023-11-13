import cover from "../../../../assets/assets/Login/loginCover.jpg";
import loginCover from "../../../../assets/assets/reservation/wood-grain-pattern-gray1x.png";
import pizza from "../../../../assets/assets/reservation/category-pizza.jpg";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { PiEyeLight, PiEyeClosedLight } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Ragistretion = () => {
  const [showPass, setShowPass] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const {name, email, password} = data;
    console.log(name, email, password);
  };

  const coverStyle = (cover) => {
    return {
      backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${cover})`,
    };
  };
  const loginCoverStyle = (cover) => {
    return {
      backgroundImage: `url(${cover})`,
    };
  };

  return (
    <div className="hero min-h-screen" style={coverStyle(cover)}>
      <div className="flex justify-center items-center h-full lg:w-[70%]">
        <div
          className="container mx-auto h-full lg:h-auto flex flex-col-reverse lg:flex-row rounded-lg"
          style={loginCoverStyle(loginCover)}
        >
          <div className="lg:w-[50%] p-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Registretion</h1>
              <p>
                More then{" "}
                <span className="text-pink-700 font-bold">15,000 recipes</span>
                from around the world!
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 md:w-[70%] mx-auto lg:w-full space-y-4">
              <div className="flex items-center gap-3 border lg:w-[60%] mx-auto px-3 py-2 bg-white rounded-xl">
                <CiUser className="text-2xl" />
                <input
                  className="px-3 py-1 w-full bg-transparent focus:outline-none border-l-2"
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex items-center gap-3 border lg:w-[60%] mx-auto px-3 py-2 bg-white rounded-xl">
                <CiMail className="text-2xl" />
                <input
                  className="px-3 py-1 w-full bg-transparent focus:outline-none border-l-2"
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-center gap-3 border lg:w-[60%] mx-auto px-3 py-2 bg-white rounded-xl">
                <CiLock className="text-2xl" />
                <input
                  className="px-3 py-1 w-full bg-transparent focus:outline-none border-l-2"
                  type={showPass ? "text" : "password"}
                  name="password"
                  {...register("password")}
                  placeholder="Enter your password"
                />
                {showPass ? (
                  <PiEyeClosedLight
                    onClick={() => setShowPass(!showPass)}
                    className="text-2xl"
                  />
                ) : (
                  <PiEyeLight
                    onClick={() => setShowPass(!showPass)}
                    className="text-2xl"
                  />
                )}
              </div>
              <div className="lg:w-[60%] mx-auto">
                <input
                  className="px-3 py-2 text-lg font-semibold text-white rounded-xl w-full bg-blue-400 cursor-pointer"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="my-10 text-center">
              <h1 className="text-lg font-semibold">
                ------ Register With ------
              </h1>
            </div>
            <div className="flex justify-center text-white text-2xl gap-5">
              <button className="bg-[#34a853] p-4 rounded-full">
                <BsGoogle />
              </button>
              <button className="bg-[#1877f2] p-4 rounded-full">
                <FaFacebookF />
              </button>
              <button className="bg-[#00acee] p-4 rounded-full">
                <BsTwitter />
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] relative">
            <img
              className="object-cover h-full lg:rounded-r-lg brightness-50"
              src={pizza}
              alt=""
            />
            <div className="absolute top-0 w-full h-full">
              <div className="flex justify-center items-center h-full">
                <div className="px-10 text-white space-y-2 md:space-y-3">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                    <span className="text-blue-400">Welcome to</span> Bistro
                    Boss Restaurant!
                  </h1>
                  <p className="md:text-xl lg:text-2xl font-semibold">
                    Enjoy your dining experience.
                  </p>
                  <p className="text-sm">Already have an account?</p>
                  <button className="px-3 md:px-4 lg:px-8 py-1 md:py-2 bg-gray-900 rounded-md border-[1px] border-blue-300 hover:border-blue-600 duration-500 hover:scale-105">
                    <Link to="/login">Login</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragistretion;
