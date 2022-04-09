import React, { useState } from 'react'
import '../App.css'
const userLogin = {
    password: "",
    username: "",
  }

export default function Login() {
    const [user, setUser] = useState(userLogin);
    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
        console.log(user);
    }
   
    
    function loginUser() {
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
        }).then(res=>res.json()).then(console.log)
        
    }

  return (
    <div>Login
        <div className='App'>
            <label htmlFor="">password</label><br />
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            <br />
            <label htmlFor="">username</label><br />
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <br />
            <input type="submit" value={"login"}  onClick={loginUser} />

        </div>
    </div>
  )
}
