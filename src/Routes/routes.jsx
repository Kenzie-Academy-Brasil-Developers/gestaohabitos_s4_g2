<<<<<<< HEAD
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
=======
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";

const Routes = () => {
  return <Switch>
    <Routes>
      <Home />
    </Routes>
  </Switch>;
>>>>>>> e3129cfb33e31b6fde07a18268051bab6b5c5844
};

export default Routes;
