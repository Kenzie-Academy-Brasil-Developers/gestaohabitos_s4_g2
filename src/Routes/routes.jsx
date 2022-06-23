import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/index.jsx";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
