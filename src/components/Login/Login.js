import React from 'react';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
// import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    // const {signInUsingGoogle} = useFirebase();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;