import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/index.jsx";
import Home from "../Pages/Home";
const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route exact path={"/"}>
        <Home />
      </Route>
    </Switch>
  );
<<<<<<< HEAD
  //=======
  //import { Switch } from "react-router-dom";
  //import Home from "../Pages/Home";
  //
  //const Routes = () => {
  //  return <Switch>
  //    <Routes>
  //      <Home />
  //    </Routes>
  //  </Switch>;
  //>>>>>>> e3129cfb33e31b6fde07a18268051bab6b5c5844
=======
>>>>>>> ba5564a095915ebb58f845dc32533f19d4523e0b
};

export default Routes;
