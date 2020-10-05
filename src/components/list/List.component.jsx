import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './List.module.scss';

const List = ({item}) => {
  const statusStyle = item.status.toLowerCase() === 'alive' ? classes.alive : classes.dead;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/characters/${item.id}`);
  }
  

  return (
    <div
      className={classes.character}
      onClick={handleClick}
    >
      <p className={classes.id}>{item.id}.</p>
      <p className={classes.species}>{item.species.toLowerCase()}</p>
      <p className={classes.image}>
        <img src={item.image} alt={item.name} />
      </p>
      <p className={classes.name}>{item.name}</p>

      <p className={statusStyle}>
        Status: {item.status.toLowerCase()}
      </p>
    </div>
  )
};

export default List;
