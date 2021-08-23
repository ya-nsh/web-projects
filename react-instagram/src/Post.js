import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

export default function (props) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={props.username}
          src="/static/images/avatar/1.jpg"
        />

        <h3>{props.username}</h3>
      </div>

      <img
        className="post__image"
        src={props.imageUrl}
        alt="Picture of Lourvre"
      />

      <h4 className="post__text">
        <strong>Mr west</strong> {props.caption}
      </h4>
    </div>
  );
}
