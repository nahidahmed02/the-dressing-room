import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorUpdate, setErrorUpdate] = useState('');

    const navigate = useNavigate();

    // signup with email and password
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // google signup 
    const [signInWithGoogle, googleUser, error] = useSignInWithGoogle(auth);

    // set email,password and confirm password
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    // navigate the users
    if (user || googleUser) {
        navigate('/')
    }
    // submission
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrorUpdate('Passwords did not match!')
            return
        }
        if (password.length < 6) {
            setErrorUpdate('Password should contain atleast 6 charecters')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    // error handling
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className='text-danger text-center'>Error: {error?.message}</p>
            </div>
        );
    }
    // showing spinner while loading
    if (loading) {
        return (
            <div className='text-center mb-3'>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className='card form-box mx-auto mt-4'>
            <h2 className='text-center fw-bold text-info fst-italic mt-3'>Sign Up</h2>
            <form onSubmit={handleCreateUser} className='mx-auto access-form'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div style={{ color: 'red' }}>{errorUpdate}</div>
                <div className='text-center d-grid'>
                    <button type="submit" className="btn btn-outline-success">Sign Up</button>
                </div>
            </form>
            <p className='text-center mt-2'>
                Already have an account?  <Link to='/login' className='form-link'>Login</Link>
            </p>
            <div className='lines'>
                <div className='line'></div>
                or
                <div className='line'></div>
            </div>
            <div>{errorElement}</div>
            {/* ------- signup with gooogle------ */}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} type="submit" className="btn btn-outline-success mb-2">Sign Up with Google</button>
            </div>
        </div>
    );
};

export default Signup;