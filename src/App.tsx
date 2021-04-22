import React, { Suspense } from 'react';
import { CssBaseline } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import {
  Switch,
  Route,
} from "react-router-dom";

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

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
      </Switch>
    </div>
  );
}

export default App;
