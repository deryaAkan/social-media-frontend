import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const initalFormData = {
    username: "",
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initalFormData,
  });

  const onFormSubmit = (formData) => {
    axios
      .post("http://localhost:8080/auth/register", formData)
      .then((response) => {
        alert("Registration successful! Please log in.");
      })
      .catch((error) => {
        console.error(error);
        alert("Registration failed. Please try again.");
      });
    localStorage.setItem("username", formData.username);
    console.log("SUBMITTED FORM", formData);
  };

  return (
    <div className="flex flex-col justify-center flex-wrap text-[#737373] sm:gap-5 shadow-lg py-10 px-20 bg-white">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl text-[#0EB39E]">Crowdie</h2>
        <p>Discover your crowd on Crowdie !</p>
      </div>
      <div className="flex justify-start py-5 flex-wrap sm:gap-5">
        <div className="w-full flex flex-col items-center relative text-gray-700 text-left gap-10 sm:gap-2">
          <h3 className="text-xl">Create Account</h3>
          <form
            className="flex flex-col gap-10 text-sm sm:gap-2"
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="text"
              id="username"
              placeholder="Enter username"
              {...register("username", {
                required: "Username cannot be empty!",
                pattern: {
                  value: /^[A-Za-z][A-Za-z0-9_]{2,19}$/,
                  message: "Please enter a valid username.",
                },
                minLength: {
                  value: 3,
                  message: "Username must have at least 3 characters!",
                },
                maxLength: {
                  value: 20,
                  message: "Username cannot be longer than 20 characters!",
                },
              })}
            />
            {errors.username && (
              <p className="text-[#F76B15]">{errors.username.message}</p>
            )}
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="email"
              id="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email cannot be empty!",
                pattern: {
                  value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email && (
              <p className="text-[#F76B15]">{errors.email.message}</p>
            )}
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="password"
              id="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password cannot be empty!",
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Password must contain minimum eight characters, one lowercase letter, and a number.",
                },
              })}
            />
            {errors.password && (
              <p className="text-[#F76B15] text-wrap">
                {" "}
                {errors.password.message}{" "}
              </p>
            )}
            <button
              className="bg-gradient-to-r from-[#0EB39E] to-[#4CCCE6] font-bold text-white text-sm py-2 px-8 rounded hover:bg-[#23A6F0]"
              type="submit"
            >
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
