import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <div>
                <h4 className='text-light fst-italic bg-success p-1'>The Dressing Room</h4>
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
                                <li className="nav-item">
                                    <CustomLink to='/blogs'>Blogs</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink to='/about'>About</CustomLink>
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