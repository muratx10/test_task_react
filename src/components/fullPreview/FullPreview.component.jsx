import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import classes from './FullPreview.module.scss';

const FullPreview = ({match}) => {
  const {params: {characterId}} = match;
  const data = useSelector(state => state.results);
  const character = data.filter(item => {
    return item.id === +characterId;
  });
  const statusStyle = character.length !== 0 && character[0].status.toLowerCase() === 'alive'
    ? classes.alive : classes.dead;


  return (
    <>
      {character.length !== 0
        ? <div className={classes.character}>
          <img className={classes.image} src={character[0].image} alt={character[0].name} />
          <div className={classes.description}>
            <h2 className={classes.name}>{character[0].name}</h2>
            <p className={classes.species}>{character[0].species}</p>
            <p className={statusStyle}>{character[0].status}</p>
            <p className={classes.gender}>{character[0].gender}</p>
            <p className={classes.location}>{character[0].location.name}</p>
          </div>
        </div>
        : <h1 style={{
          fontSize: '2rem',
          textAlign: 'center',
          fontFamily: 'Maven Pro, sans-serif',
        }}>THE DATA IS NOT FETCHED YET, PLEASE GO
          TO HOMEPAGE THEN TRY
          AGAIN</h1>}
    </>
  )
}

export default withRouter(FullPreview);
