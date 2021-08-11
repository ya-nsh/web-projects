import React from 'react';
import './Todo.css';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

export default function Todo(props) {
  return (
    <List className="todo__lists">
      <ListItem>
        <ListItemAvatar>🎉</ListItemAvatar>
        <ListItemText primary={props.text}></ListItemText>
      </ListItem>
    </List>
  );
}
