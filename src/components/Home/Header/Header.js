import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

// impliment navbar
const Header = () => {
    const [user] = useAuthState(auth);

    // logout button
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <div>
                <h4 className='text-light fst-italic bg-success p-1 text-center'>The Dressing Room</h4>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <CustomLink to='/'>Home</CustomLink>
                                </li>

                                {/* will appear to logged in user */}
                                <li className="nav-item">
                                    {
                                        user
                                            ?
                                            <CustomLink to='/inventory'>Manage Items</CustomLink>
                                            :
                                            ''
                                    }
                                </li>

                                {/* will appear to logged in user */}
                                <li className="nav-item">
                                    {
                                        user
                                            ?
                                            <CustomLink to='/additem'>Add Item</CustomLink>
                                            :
                                            ''
                                    }
                                </li>

                                {/* will appear to logged in user */}
                                <li className="nav-item">
                                    {
                                        user
                                            ?
                                            <CustomLink to='/myitems'>My Items</CustomLink>
                                            :
                                            ''
                                    }
                                </li>
                                <li className="nav-item">
                                    <CustomLink to='/blogs'>Blogs</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to='/sponsors'>Sponsors</CustomLink>
                                </li>

                                {/* signout button will show in the navbar as user logged in */}
                                <li className="nav-item">
                                    {
                                        user
                                            ?
                                            <button onClick={handleSignOut} className='px-3 fw-bold btn-light rounded bg-success text-light'>Sign Out</button>
                                            :
                                            <CustomLink to='/login'>Login</CustomLink>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;