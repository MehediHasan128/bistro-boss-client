import cover from "../../../../assets/assets/Login/loginCover.jpg";
import loginCover from "../../../../assets/assets/reservation/wood-grain-pattern-gray1x.png";
import pizza from "../../../../assets/assets/reservation/category-pizza.jpg";
import { CiLock, CiMail } from "react-icons/ci";

const Login = () => {
  const coverStyle = (cover) => {
    return {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${cover})`,
    };
  };
  const loginCoverStyle = (cover) => {
    return {
      backgroundImage: `url(${cover})`,
    };
  };

  return (
    <div className="hero min-h-screen" style={coverStyle(cover)}>
      <div className="flex justify-center items-center h-full">
        <div
          className="container mx-auto h-full lg:h-auto flex flex-col lg:flex-row"
          style={loginCoverStyle(loginCover)}
        >
          <div className="lg:w-[50%]">
            <img className="object-cover h-full" src={pizza} alt="" />
          </div>
          <div className="lg:w-[50%] p-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Login</h1>
              <p>
                More then{" "}
                <span className="text-pink-700 font-bold">15,000 recipes</span>{" "}
                from around the world!
              </p>
            </div>
            <form className="mt-10 space-y-4">
              <div className="flex items-center gap-3 border lg:w-[60%] mx-auto px-3 py-2 bg-white rounded-xl">
                <CiMail className="text-2xl" />
                <input
                  className="px-3 py-1 w-full bg-transparent focus:outline-none border-l-2"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex items-center gap-3 border lg:w-[60%] mx-auto px-3 py-2 bg-white rounded-xl">
                <CiLock className="text-2xl" />
                <input
                  className="px-3 py-1 w-full bg-transparent focus:outline-none border-l-2"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="lg:w-[60%] mx-auto px-2 flex justify-between font-medium">
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <h1>Remember me</h1>
                </div>
                <div>
                  <button className="text-blue-600 underline">
                    Forgot Password?
                  </button>
                </div>
              </div>
              <div className="lg:w-[60%] mx-auto">
                <input className="px-3 py-2 text-lg font-semibold text-white rounded-xl w-full bg-orange-700" type="submit" value="Login" />
              </div>
            </form>
            <div className="my-10 text-center">
                <h1 className="text-lg font-semibold">------ Login With ------</h1>
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
