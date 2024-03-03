import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import  {FaBars} from "react-icons/fa"

import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isNavShowing,setIsNavShowing]=useState(window.innerWidth>800?true:false);
  const closeNavHandler=()=>{
    if(window.innerWidth<800){
      setIsNavShowing(false);
    }else{
      setIsNavShowing(true);
    }
  }
  
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo"onclick={closeNavHandler}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        {isNavShowing&&<ul className="nav__menu">
          <li><Link to="/profile/dfgsj"onclick={closeNavHandler}>Blakely</Link></li>
          <li><Link to="/create"onclick={closeNavHandler}>Create Post</Link></li>
          <li><Link to="/authors"onclick={closeNavHandler}>Authors</Link></li>
          <li><Link to="/logout"onclick={closeNavHandler}>Logout</Link></li>
        </ul>}
        <button className="nav__toggle-btn"onClick={()=>setIsNavShowing(!isNavShowing)}>
        {isNavShowing?<AiOutlineClose/>:<FaBars/>}
         
        </button>
      </div>
    </nav>
  );
}

export default Header;
