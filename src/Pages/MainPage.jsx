import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1>Hello ! This is the main page !</h1>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">SIGN UP</Link>
      </div>
    </>
  );
};

export default MainPage;
