import './App.css';
import { OuterLayout } from './UI/Layout.style';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout></OuterLayout>
    </div>
  );
}

export default App;
