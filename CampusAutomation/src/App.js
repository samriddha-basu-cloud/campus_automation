import './App.css';

  import { Login } from './components/Login';
  import { Routes, Route } from 'react-router-dom';
  import  Register  from './components/Register';
import Dashboard from './components/Dashboard';


  function App() {
    return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    );
  }

  export default App;