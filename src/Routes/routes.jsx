import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import DashGroups from "../Pages/DashGrupos";
import Group from "../Pages/Grupos";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Blog from "../Pages/Blog"
import RegisterUser from "../Pages/RegisterUser";
import Blog  from "../Pages/Blog";
import CardAboutUs from "../Components/CardAboutUs";
// import Login from "../Pages/Login";
// import Profile from "../Pages/Perfil";
import Profile from "../Pages/Perfil";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <CardAboutUs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <RegisterUser />
      </Route>
      <Route path="/blog">
        <Blog/>
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/explorerGroups">
        <DashGroups />
      </Route> 
      <Route path="/dashboard/group/:nameGroup">
        <Group />
      </Route> 
      <Route path="/updateUser">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
