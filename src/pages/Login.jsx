import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
   
    email: '',
    password: ''
    
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return{...prevState,[e.target.name]: e.target.value}
    })
  };

 

  return (
    <section className="Login">
      <div className="container">
        <h2>Sign in</h2>
        <form className="form login_form" >
          <p className="form_error-message">This is an error message</p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}autoFocus />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <button type="submit" className='btn primary'>Login</button>
        </form>
        <small>Don't have an Account? <Link to="/Register"> Sign up</Link></small>
      </div>
    </section>
  );
};

export default Login;
