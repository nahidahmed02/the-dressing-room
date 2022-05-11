import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);

    // to fix reload redirect to login page while user is available
    if (loading) {
        return
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-3'>
            <h2 className='text-danger mb-3 fst-italic'>Please verify your email</h2>
            <button
                className='btn btn-warning fw-bold'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Email sent');
                }}
            >
                Send verification email again
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;