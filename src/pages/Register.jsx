import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
const userRegister = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "" 
  }
  
export default function Register() {
    const [user, setUser] = useState(userRegister);
    function handleChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
        console.log(user);
        
    }
    function registeruser() {

        let burl = `https://masai-api-mocker.herokuapp.com/auth/register`
        fetch(burl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            alert("you have been registered, proceed to login")
        })

    }
  
    return (
    <div>Register
        <div className='App'>
            <label htmlFor="name">name</label><br />
            <input type="text" name="name" id='name' value={user.name} onChange={handleChange} />
            <br />
            <label htmlFor="email">email</label><br />
            <input type="email" name="email" value={user.email} onChange={handleChange} />
            <br />
            <label htmlFor="">password</label><br />
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            <br />
            <label htmlFor="">username</label><br />
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <br />
            <label htmlFor="">mobile</label><br />
            <input type="tel" name="mobile" value={user.mobile} onChange={handleChange} />
            <br />
            <label htmlFor="">description</label><br />
            <input type="text" name="description" value={user.description} onChange={handleChange} />
            <br />
            <input type="submit" onClick={registeruser} value={"register"} /> 
            <Link to='/login'>
                <p>Redirect to Login Page</p>
            </Link>
        </div>
    </div>
  )
}
