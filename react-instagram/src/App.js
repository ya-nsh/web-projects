import './App.css';
import Post from './Post';

function App() {
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
      <Post
        username="louis"
        caption="new from paris"
        imageUrl="https://i.redd.it/9hiqbkvghwi71.jpg"
      />
      <Post
        username="louis"
        caption="new from paris"
        imageUrl="https://i.imgur.com/VFFbr9k.jpeg"
      />
      <Post
        username="louis"
        caption="new from paris"
        imageUrl="https://i.redd.it/9hiqbkvghwi71.jpg"
      />
    </div>
  );
}

export default App;
