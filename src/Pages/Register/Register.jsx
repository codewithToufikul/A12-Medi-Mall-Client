import { FaGithub, FaRegEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" bg-gray-900 text-[#333] md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 md:block hidden ">
          <img
            src="https://i.ibb.co/W3QMLH8/signin-image.png"
            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>
        <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold">
                Sign <span className=" text-custom-custom">UP</span>
              </h3>
              <p className="text-sm mt-4 ">
                Already have an account{" "}
                <Link
                  to="/login"
                  href="javascript:void(0);"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className=" mb-8">
              <label className="text-xs block mb-2">Username</label>
              <div className=" flex items-center">
                <input
                  name="text"
                  type="text"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Enter Username"
                />
              </div>
            </div>
            <div>
              <label className="text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <p className=" absolute right-2 cursor-pointer">
                  <IoMailOutline />
                </p>
              </div>
            </div>
            <div className="my-8">
              <label className="text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <p className=" absolute right-2 cursor-pointer">
                  <FaRegEye />
                </p>
              </div>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select Your Role
                </option>
                <option>User</option>
                <option>Seller</option>
              </select>
            </div>
            <input type="file" className="file-input file-input-warning  mt-8 file-input-bordered w-full" />
            <div className="flex items-center justify-between gap-2 mt-5"></div>
            <div className="mt-4">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-custom-custom focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="my-8 text-sm text-gray-400 text-center">
              or continue with
            </p>
            <div className="space-x-8 flex items-center justify-center">
              <p className=" text-4xl">
                <FcGoogle />
              </p>
              <p className=" text-4xl">
                <FaGithub />
              </p>

              <button
                type="button"
                className="border-none w-[38px] outline-none"
              >
                <img
                  src="https://i.ibb.co/nQxZ8Xy/communication-1.png"
                  alt=""
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
