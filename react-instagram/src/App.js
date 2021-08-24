import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { db } from './firebase';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function App() {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(
        snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        }))
      );
    });
  }, []);

  const signUp = () => {
    setOpen(true); // open modal
  };

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
            className="app__headerImage"
            style={{ margin: 'auto', display: 'block' }}
          />
          <Input
            placeholder="text"
            type="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </Modal>

      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>
      <Button onClick={signUp}>Sign Up</Button>

      <h1>Hello</h1>
      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default App;
