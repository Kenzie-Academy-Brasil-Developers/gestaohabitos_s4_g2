import { Route, Switch } from "react-router-dom";

// import Dashboard from "../Pages/Dashboard";
// import DashGroups from "../Pages/DashGrupos";
// import Group from "../Pages/Grupos";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegisterUser from "../Pages/RegisterUser";
import Blog from "../Pages/Blog";
// import Login from "../Pages/Login";
// import Profile from "../Pages/Perfil";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <RegisterUser />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      {/* <Route exact path="/dashboard">
        <Dashboard />
      </Route> */}
      {/* <Route exact path="/explorerGroups" component={DashGroups} />
      <Route exact path="/dashboard/group/:nameGroup" component={Group} />
      <Route exact path="/updateUser" component={Profile} /> */}
    </Switch>
  );
};

export default Routes;
