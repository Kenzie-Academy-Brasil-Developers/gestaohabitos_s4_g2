import { Switch } from "react-router-dom";
import Route from ".";

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
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/register" component={RegisterUser} />

      <Route path="/blog" component={Blog} />

      <Route isPrivate path="/updateUser" component={Profile} />

      <Route isPrivate exact path="/dashboard" component={Dashboard} />

      <Route
        isPrivate
        path="/dashboard/group/:nameGroup"
        component={DashGroups}
      />

      <Route isPrivate path="/explorerGroups" component={Group} />
    </Switch>
  );
};

export default Routes;
