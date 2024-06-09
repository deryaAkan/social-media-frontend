import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center flex-wrap text-[#737373] sm:gap-5 shadow-lg py-10 px-20 bg-white rounded">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl text-[#0EB39E]">Crowdie</h2>
        <p>Discover your crowd on Crowdie !</p>
      </div>
      <div className="flex justify-start py-5 flex-wrap sm:gap-5">
        <div className="w-full flex flex-col items-center relative text-gray-700 text-left gap-10 sm:gap-2">
          <h3 className="text-xl">Create Account</h3>
          <form className="flex flex-col gap-10 text-sm sm:gap-2">
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="text"
              id="username"
              placeholder="Enter username"
            />
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="email"
              id="email"
              placeholder="Enter email"
            />

            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="password"
              id="password"
              placeholder="Enter password"
            />
            <button className="bg-gradient-to-r from-[#0EB39E] to-[#4CCCE6] font-bold text-white text-sm py-2 px-8 rounded hover:bg-[#23A6F0]">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col text-[#737373] px-4">
        <p>Alreay have an acoount?</p>
        <a className="text-[#0EB39E] cursor-pointer underline">Login</a>
      </div>
    </div>
  );
};

export default RegisterForm;
