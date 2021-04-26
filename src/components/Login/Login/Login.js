import React, { useContext } from 'react';
import './Login.css';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

const Login = () => {

    let [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let errorMessage = '';

    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app();
      }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = {
              userName: displayName,
              email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch((error) => {
            errorMessage = error.message;
            console.log('Google sign in error', errorMessage);
          });
      }

    return (
        <div className="login-page">
            <div className="container">
                <div className="row align-items-center" style={{ height: "100vh" }}>
                    <div className="col-md-12 col-lg-12 p-1">
                        <div className="from-group d-flex justify-content-center sign-in">
                            <button className="btn btn-brand" onClick={handleGoogleSignIn}><p>Google Sign in</p></button>
                            {
                             ( !loggedInUser.signedInUser)&&<p className='text-white'>{errorMessage}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;