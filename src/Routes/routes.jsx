import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Login from "../Pages/Login/index.jsx";
import RegisterUser from "../Pages/RegisterUser/index.jsx";
=======

// import Dashboard from "../Pages/Dashboard";
// import DashGroups from "../Pages/DashGrupos";
// import Group from "../Pages/Grupos";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegisterUser from "../Pages/RegisterUser";
import Blog  from "../Pages/Blog";
// import Login from "../Pages/Login";
// import Profile from "../Pages/Perfil";
>>>>>>> 1b6cf31a5ef3c2692a57d388fc573bfe460c9b78

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
<<<<<<< HEAD
      <Route>
        <RegisterUser path={"/register"} />
      </Route>
=======
      <Route exact path="/register">
        <RegisterUser />
      </Route>
      <Route exact path="/blog">
        <Blog/>
      </Route>
      {/* <Route exact path="/dashboard">
        <Dashboard />
      </Route> */}
      {/* <Route exact path="/explorerGroups" component={DashGroups} />
      <Route exact path="/dashboard/group/:nameGroup" component={Group} />
      <Route exact path="/updateUser" component={Profile} /> */}
>>>>>>> 1b6cf31a5ef3c2692a57d388fc573bfe460c9b78
    </Switch>
  );
};

export default Routes;
