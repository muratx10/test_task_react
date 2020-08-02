import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const HeaderComponent = ({location: {pathname}}) => {
  return (
    <>
      <Link className={pathname !== '/' ? classes.btnActive : classes.btnDisable} to='/'>BACK
        TO HOMEPAGE</Link>
      <h1 className={classes.title}>
        The Rick and Morty
      </h1>
      <p className={classes.tooltip}>
        <b>CTRL+H</b>
        <br />
        toggle ReduxDevTools
      </p>
    </>
  )
}

export default withRouter(HeaderComponent);
