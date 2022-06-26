import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import DashGroups from "../Pages/DashGrupos";
import Group from "../Pages/Grupos";
import Home from "../Pages/Home";
import RegisterUser from "../Pages/RegisterUser/index.jsx";
import Login from "../Pages/Login";
import Blog from "../Pages/Blog";
import Profile from "../Pages/Perfil";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        <RegisterUser />
      </Route>

      <Route path="/register">
        <RegisterUser />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />n
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
      <Route exact path={"/cadastro"}>
        <RegisterUser />
      </Route>
    </Switch>
  );
};

export default Routes;
