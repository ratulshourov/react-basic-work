import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Nav from './components/Nav';
function App() {
  const [text, setText] = useState('hello');
  return (
    <div>
     <Nav title="NavBar2"></Nav>
    </div>
  );
}

export default App;
