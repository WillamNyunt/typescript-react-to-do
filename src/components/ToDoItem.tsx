import React from 'react';
import classes from './ToDoItem.module.css'


const ToDoItem: React.FC<{text : string, onClick: () => void}> = ({text, onClick}) => {
  return (
    <li className={classes.item} onClick={onClick}>{text}</li>
  );
};

export default ToDoItem;
