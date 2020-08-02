import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import HeaderComponent from './components/header';
import Lists from './containers/lists/Lists.container';
import ReduxDevTools from './utils/reduxDevTool';
import Loader from 'react-loader-spinner';

const App = () => {
  const state = useSelector(state => state);
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <HeaderComponent />
        <ReduxDevTools />
        <Switch>
          <Route path='/' component={Lists} />} />
        </Switch>
        {
          state.isLoading ?
            <Loader
              type="MutatingDots"
              color="#373b41"
              height={100}
              width={100}
            />
            : null
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
