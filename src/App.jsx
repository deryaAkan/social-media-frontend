import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
import MainPage from "./Pages/MainPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <div className="w-full h-full flex bg-gradient-to-r from-[#4CCCE6] to-[#0EB39E] items-center justify-center">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route>
            <ProfilePage path="/profile" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
