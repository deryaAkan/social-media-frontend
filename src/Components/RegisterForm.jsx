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
    <div className="flex w-full flex-col items-center px-24 py-20 justify-center text-[#252B42] sm:justify-center sm:p-0">
      <div className="flex justify-center flex-wrap sm:gap-5 shadow-md py-10 pr-24 pl-20 bg-white rounded">
        <div className="flex justify-start w-4/5 py-5 flex-wrap sm:gap-5">
          <div className="flex basis-2/3 sm:flex-wrap sm:gap-5">
            <div className="w-full flex flex-col items-center relative text-gray-700 text-left gap-10 sm:gap-2">
              <h2 className="font-bold text-2xl">Create Account</h2>
              <form className="flex flex-col gap-10 text-sm text-[#737373] sm:gap-2">
                <input
                  className="text-sm max-w-fit text-[#737373] shadow-md py-2 my-2 px-4"
                  type="text"
                  id="username"
                  placeholder="Enter username"
                />
                <input
                  className="text-sm max-w-fit text-[#737373] shadow-md py-2 my-2 px-4"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                />

                <input
                  className="text-sm max-w-fit text-[#737373] shadow-md py-2 my-2 px-4"
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />

                <input
                  className="text-sm max-w-fit text-[#737373] shadow-md py-2 my-2 px-4"
                  type="password"
                  placeholder="Validate password"
                />

                <button className="bg-gradient-to-r from-[#0EB39E] to-[#4CCCE6] font-bold text-white text-sm py-2 px-8 rounded hover:bg-[#23A6F0]">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
