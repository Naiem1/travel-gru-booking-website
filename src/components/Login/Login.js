import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  let history = useHistory();
  let location = useLocation();
  
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    success: false,
    error: ''
  })


  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const {displayName, photoURL, email} = res.user;
        const userInfo = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }

        setUser(userInfo);
        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch(err => {
        console.log(err);
      })
  }



  const handleGoogleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        setUser({
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''
        });
    })
  }


  const handleBlur = (event) => {
    let isFieldValid = true;

    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }

    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const isPasswordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = (isPasswordValid && isPasswordHasNumber);
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }


  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = '';
          updateUserName(user.name)
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from)
          
        })
        .catch(error => {
          console.log(error);
          const newUserInfo = { ...user };
          newUserInfo.success = false;
          newUserInfo.error = error.message;
          setUser(newUserInfo);
      })
    }


    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log('loginInfo>>>', res.user)
          const newUserInfo = { ...user };
          newUserInfo['success'] = true;
          newUserInfo['error'] = '';
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from)
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo['error'] = error.message;
          newUserInfo['success'] = false;
          setUser(newUserInfo);
      })
    }

    event.preventDefault();
  }


  // UPDATE USERNAME

  const updateUserName = name => {
    const user = firebase.auth().currentUser
    user.updateProfile({ 
      displayName: name
    })
      .then(res => {
        console.log(res);
        console.log('User Name Update Successfully>>>', res);
      })
      .catch(err => {
        console.log(err);
    })
  }

  return (
    <div className="login">
      <div className="login__form">
        {!newUser ? <h4>Login</h4> : <h4>Sign Up</h4> }
        {!newUser && <form action="">
          <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email..." required/>
          <input type="password" onBlur={handleBlur} name="password" placeholder="Password..." required />
          <div className="forgot__password">
            <div className="checkbox">
              <input type="checkbox" name="checkbox" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <label htmlFor="">Forgot Password</label>
          </div>
          <input onClick={handleSubmit} type="submit" value="Login"/>
        </form>}

        {newUser && <form className="signup__form">
        <h3>Create an Account</h3>
        <input type="text" onBlur={handleBlur} name="name" placeholder="First Name" required/>
        <input type="text" onBlur={handleBlur} name="name" placeholder="Last Name" required/>
        <input type="email" onBlur={handleBlur} name="email" placeholder="Email or Username" required/>
        <input type="password" onBlur={handleBlur}  name="password" placeholder="Password" required/>
        <input type="password" onBlur={handleBlur} name="password" placeholder="Confirm Password"  required/>
        <input type="submit"  onClick={handleSubmit} value="Sign Up" />
      </form>}

        {
          user.success ? <h4 style={{color: 'green'}}>LoggedIn Success</h4>
            : <h4 style={{color: 'red'}}>{user.error}</h4>
        }


        <span href="">{newUser ? <span>Have an Account? </span> : <span> Don't have account? </span>}<a onClick={() => setNewUser(!newUser)}>{newUser ? <a>login </a> : <a>Create an account</a>}</a></span>
        
      </div>


     
      
      <div className="line"></div>
      {
        user.isSignedIn ? <button onClick={handleGoogleSignOut} className="login__btn">SignOut from google</button>
          : <button onClick={handleGoogleSignIn} className="login__btn">Continue with google</button>

      }
      

      <button  className="login__btn">Continue with facebook</button>
  </div>
  );
};

export default Login;