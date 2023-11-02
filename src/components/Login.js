import React from "react";
import loginImage from "../images/login.jpeg";
import ggLogo from "../images/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 font-Manrope max-sm:px-2.5">
      <div className="col-span-1 flex justify-center items-center h-screen sm:h-full">
        <form action="" className="form" id="form-2">
              <h3 className="font-bold text-center sm:text-left text-[37px]">Welcome back</h3>
              <p className="desc font-normal text-base text-center sm:text-left text-[#808191]">Welcome back! Please enter your details.</p>

              <div className="flex flex-col  mt-[34px]">
                  <label for="email" class="text-sm font-medium leading-[22px]">Email</label>
                  <input id="email" name="email" type="text" placeholder="Enter your email" className="px-3 py-2.5 rounded-lg text-base border border-[#E4E4E4] bg-transparent"/>
                  <span className="form-message"></span>
              </div>

              <div className="flex flex-col mt-4">
                  <label for="password" class="text-sm font-medium leading-[22px]">Password</label>
                  <input id="password" name="password" type="password" placeholder="**********" className="px-3 py-2.5 rounded-lg text-base border border-[#E4E4E4] bg-transparent"/>
                  <span className="form-message"></span>
              </div>

              <div class="text-sm mt-4 flex sm:justify-between justify-end">
                <div className="sm:flex items-center hidden">
                  <input id="password" name="password" type="checkbox" className="rounded w-4 h-4 border border-[#E4E4E4] bg-transparent"/>
                  <label for="password" class="text-sm font-medium pl-1.5 leading-[22px]">Rememner for 30 days</label>
                </div>
                <a href="#" className="text-sm font-medium leading-[22px] text-[#475BE8]">Forgot Password</a>
              </div>

              <Link to='/Home'><button className="form-submit w-full text-white mt-5 py-3 rounded-xl bg-[#475BE8]">Sign in</button></Link>

              <button className="form-submit w-full flex items-center justify-center mt-5 py-3 rounded-xl font-semibold leading-6 border border-[#E4E4E4] bg-transparent"><img src={ggLogo} className="w-6 h-6 mr-2.5"/>Sign in with Google</button>
              
              <p className="link w-full flex justify-center text-sm mt-7 text-[#808191]">Don’t have an account? <a href="#" className="text-[#475BE8]"> Sign up</a></p>
          </form>
      </div>
      <img className="bg-cover bg-center md:w-full max-w-full h-screen hidden sm:block" src={loginImage}/>
    </div>
  );
};

export default Login;
