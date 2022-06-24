import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/index.jsx";
import RegisterUser from "../Pages/RegisterUser/index.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route>
        <RegisterUser path={"/register"} />
      </Route>
    </Switch>
  );
};

export default Routes;
