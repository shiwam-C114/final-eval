import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Employee from './pages/Employee';
import { useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  function logoutUser() {
    setIsLogin(false)
  }

  return (

    <>
    <nav>
      <ul className='navbar' >
        <Link to='/'>
          <li>Home</li>
        </Link>
          { !isLogin
            ?
        <Link to='login'>
            <li>Login</li>
        </Link>
            :
            <button onClick={logoutUser}>Logout</button>
          }
        <Link to='register' >
          <li>Register</li>
        </Link>
        <Link to='employee'>
          <li>Employees</li>
        </Link>
      </ul>
       
    </nav>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/employee' element = {<Employee />} />

    </Routes>
    </>
    //     <div className="App">
    //   <header className="App-header">
    //    hello
    //   </header>
    // </div>
  );
}

export default App;
