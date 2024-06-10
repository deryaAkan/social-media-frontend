const LoginForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center flex-wrap text-[#737373] sm:gap-5 shadow-lg py-10 px-20 bg-white">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl text-[#0EB39E]">Crowdie</h2>
          <p>Discover your crowd on Crowdie !</p>
        </div>
        <div className="flex justify-start py-5 flex-wrap sm:gap-5">
          <div className="w-full flex flex-col items-center relative text-gray-700 text-left gap-10 sm:gap-2">
            <h3 className="text-xl">Login</h3>
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="text"
              id="username"
              placeholder="Enter username"
            />
            <input
              className="text-sm max-w-fit rounded-sm border border-[#0EB39E] hover:border-[#4CCCE6] py-2 my-2 px-4"
              type="text"
              id="password"
              placeholder="Enter password"
            />
            <button
              className="bg-gradient-to-r from-[#0EB39E] to-[#4CCCE6] font-bold text-white text-sm py-2 px-8 rounded hover:bg-[#23A6F0]"
              type="submit"
            >
              Login
            </button>
            <div className="flex flex-col text-[#737373] px-4 py-4 items-center justify-center">
              <p>Don't have an acoount yet?</p>
              <a
                href="./RegisterForm.jsx"
                className="text-[#0EB39E] cursor-pointer underline"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
