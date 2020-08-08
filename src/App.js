import React, { useCallback, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import FullPreview from './components/fullPreview';
import HeaderComponent from './components/header';
import Lists from './components/lists';
import { loadData } from './store/actions/actionCreators';
import ReduxDevTools from './utils/reduxDevTool';

const App = () => {
  const state = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();

  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    stableDispatch(loadData('https://rickandmortyapi.com/api/character'));
  }, [stableDispatch])

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <HeaderComponent />
        <ReduxDevTools />
        <Switch>
          <Route exact path='/' component={Lists} />
          <Route path='/characters/:characterId' component={FullPreview} />
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
