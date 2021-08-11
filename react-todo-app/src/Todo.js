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
import { textAlign } from '@material-ui/system';

export default function Todo(props) {
  return (
    <List style={{ marginTop: '50px' }} className="todo__lists">
      <ListItem className="todo__list">
        <ListItemAvatar>🎉</ListItemAvatar>
        <ListItemText primary={props.text.todo}></ListItemText>
      </ListItem>

      <DeleteIcon
        onClick={event => db.collection('todos').doc(props.text.id).delete()}
        style={{ cursor: 'pointer', position: 'relative' }}
      />
    </List>
  );
}
