import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import HeaderComponent from './components/header';
import Lists from './containers/lists/Lists.container';
import ReduxDevTools from './utils/reduxDevTool';

const App = () => {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <HeaderComponent />
        <ReduxDevTools />
        <Switch>
          <Route path='/' component={Lists} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
