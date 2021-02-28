import React from 'react'
import './App.css';
import Menu01 from './components/Menu01/Menu01'

function App() {
  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.title}>Menu Hamburger</h1>
      <Menu01 />
    </div>
  );
}

const styles = {
  container: {
    border: '1px solid yellow',
    padding: '2rem'
  },
  title: {
    margin: 'auto',
    textAlign: 'center'
  }
}

export default App;
