import './App.css';
  import HomePage from './components/HomePage';
  import { Login } from './components/Login';
  import { Routes, Route } from 'react-router-dom';
  import  Register  from './components/Register';


  function App() {
    return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    );
  }

  export default App;