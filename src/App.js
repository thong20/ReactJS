import './App.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <Button onClick={() => console.log('clicked')}>Show Toast</Button>
    </div>
  );
}

export default App;
