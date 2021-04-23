import React, { Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import {
  Switch,
  Route,
} from "react-router-dom";

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const SignIn = React.lazy(() => import('./pages/SignInSide'));
const SignUp = React.lazy(() => import('./pages/SignUp'));

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route path="/dashboard">
          <Suspense fallback={<LinearProgress />}>
            <Dashboard />
          </Suspense>
        </Route>
        <Route path="/signin">
          <Suspense fallback={<LinearProgress />}>
            <SignIn />
          </Suspense>
        </Route>
        <Route path="/signup">
          <Suspense fallback={<LinearProgress />}>
            <SignUp />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
