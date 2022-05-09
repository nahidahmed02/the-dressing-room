import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    // set email,password and signin
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    // forgot password
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('Please check your email')
            })
    }

    return (
        <div className='card form-box mx-auto mt-4'>
            <h2 className='text-center fw-bold text-info fst-italic mt-3'>Login</h2>
            <form onSubmit={handleUserSignIn} className='access-form mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>

                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <p>Please Wait...</p>
                }

                <div className='text-center d-grid'>
                    <button type="submit" className="btn btn-outline-success">Login</button>
                </div>
                <div className='text-center'>
                    <button onClick={resetPassword} className='btn btn-link'>Forgot Password</button>
                </div>
            </form>
            <p className='text-center mt-2'>
                Don't have an account?  <Link to='/signup'>Create an account</Link>
            </p>
        </div>
    );
};

export default Login;