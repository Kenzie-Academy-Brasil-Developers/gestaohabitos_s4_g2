import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/index.jsx";
import Home from "../Pages/Home";
import RegisterUser from "../Pages/RegisterUser/index.jsx";
const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/cadastro"}>
        <RegisterUser />
      </Route>
    </Switch>
  );
};

export default Routes;
