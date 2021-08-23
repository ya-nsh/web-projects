import { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'louis',
      caption: 'new from paris',
      imageUrl: 'https://i.redd.it/9hiqbkvghwi71.jpg'
    },
    {
      username: 'mao',
      caption: 'Shanghai heights',
      imageUrl: 'https://i.imgur.com/VFFbr9k.jpeg'
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="app__headerImage"
        />
      </div>
      <h1>Hello</h1>
      {posts.map(post => {
        return (
          <Post
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
