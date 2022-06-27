import { Route, Switch } from "react-router-dom";


import Dashboard from "../Pages/Dash";
import DashGroups from "../Pages/DashGroups";
import Group from "../Pages/Groups";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegisterUser from "../Pages/RegisterUser";
import Profile from "../Pages/Perfil";
import Blog from "../Pages/BlogPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <RegisterUser />
      </Route>
      <Route path="/updateUser">
        <Profile />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/dashboard/group/:nameGroup">
        <DashGroups />
      </Route>
      <Route path="/explorerGroups">
        <Group />
      </Route>

    </Switch>
  );
};

export default Routes;

{
  /* <Route path="/blog">
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
</Route>  */
}
