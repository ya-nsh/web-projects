import './Todo.css';
import React from 'react';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Button,
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
        <ListItemText primary={props.text.todo}></ListItemText>
      </ListItem>
      <DeleteIcon
        onClick={event => db.collection('todos').doc(props.text.id).delete()}
        style={{ cursor: 'pointer', position: 'relative', bottom: '40px' }}
      />
    </List>
  );
}
