import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
