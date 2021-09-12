// import { Switch, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Login from '../views/login/Login';
import Dashboard from '../views/Dashboard';
// import Home from '../views/Home';
// import Other from '../views/Other';

// import Question_Part_1 from '../views/Vuejs/Question_Part_1';
// import OtherMain from '../views/OtherMain';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';

function Router() {

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}

        {/* Pubic Routes */}
        {/* <PublicRoute path="/login" component={Login} props="none" name="Compop" id="123" /> */}
        {/* here we send component and other objects to PublicRoute and then it catch component as component and other object as rest */}
        {/* <PublicRoute path="/login" component={Login} /> */}
        <PublicRoute exact path="/" component={Login} />
        {/* <PublicRoute path="/other" component={Other} />
        <PublicRoute path="/vuejs/question-part-1" component={Question_Part_1} />

        <PublicRoute path="/data-pass" component={OtherMain} /> */}

        {/* Private Route */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default Router;