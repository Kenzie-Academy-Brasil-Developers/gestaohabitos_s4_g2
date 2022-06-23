import { Route, Switch } from "react-router-dom";
import Blog from "../Pages/Blog";
import Dashboard from "../Pages/Dashboard";
import DashGroups from "../Pages/DashGrupos";
import Group from "../Pages/Grupos";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Perfil";
import RegisterUser from "../Pages/RegisterUser";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterUser} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/ExplorerGroups" component={DashGroups} />
      <Route exact path="/Dashboard/group/:nameGroup" component={Group} />
      <Route exact path="/updateUser" component={Profile} />
    </Switch>
  );
};

export default Routes;
