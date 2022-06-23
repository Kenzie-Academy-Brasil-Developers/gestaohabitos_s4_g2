import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";
import RegisterUser from "../Pages/RegisterUser"
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={RegisterUser}/>
      <Route exact path="/blog"/>
      <Route exact path="/Dashboard"/>
      <Route exact path="/ExplorerGroups"/>
      <Route exact path="/Dashboard/group/:nameGroup"/>
      <Route exact path="/updateUser"/>
    </Switch>
  );
};

export default Routes;
