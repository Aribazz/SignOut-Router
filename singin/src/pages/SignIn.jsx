import React from "react";
import logo  from "../img/logo.png";
import backgroundlogo from "../img/loginbackground.png"
import GoogleImg from "../img/GoogleImg.png";
import { Link } from "react-router-dom";


function SignIn (){
    return(
    <div  className='containerflex'>
     <div className='containerleft'>
       <div className='topSection'>
    <img
    className='topSectionlogo'
     src={logo}  alt='logo'/>
     <div className="topSectionTxt">
     <span>Don't have an account? <Link to="signin">Sign up</Link></span>
    </div>
     </div>

<div className="headingSection headingMG">
<h2 >Welcome back</h2>
</div>
<form action="" className='form'>
    <div className="formContainer">
        <div className="formFlex">
    <label htmlFor="">E-Mail</label>
      <input 
    placeholder='Email address'
    type='email'
    name='username'/>
    </div>
    <div className="formFlex">
    <label htmlFor="">Password</label>
    <input 
        placeholder='Password'
    type='password'
    name='password'/>
    </div>
    </div>
<div className="btn signinBtn">
   <button >Sign in</button>
   <button ><img  src={GoogleImg} alt=""></img><span className='text'>Sign in with Google</span></button>
   </div>

   </form>

     </div>
     <div className="backgroundimg">
     <img src={backgroundlogo} alt="image1" />

     </div>
     </div>
    )
}

export default SignIn;