import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = () => {
  return (
    <div className="flex flex-col py-4">
      <div className="flex justify-center">
        <h1>Crowdie</h1>
      </div>
      <nav className="flex flex-col gap-5 py-4">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/">Search</NavLink>
        <NavLink to="/">Messages</NavLink>
        <NavLink to="/">Notifications</NavLink>
        <NavLink to="/">Create Post</NavLink>
        <NavLink to="/">Theme</NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
