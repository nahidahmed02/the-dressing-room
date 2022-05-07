import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2 className='Q-A'>Q: What is the difference between JavaScript and NodeJs?</h2>
            <p className='Q-A'>A: Some of the differences between JavaScript and NodeJs are -
                <br />
                <br />
                1. JavaScript is a programming language, whereas nodejs is a runtime environment for Javascript.
                <br />
                2. JavaScript runs mainly on the client-side but nodejs runs mainly on the server-side.
                <br />
                3. JavaScript is capable of adding HTML. NodeJs is not capable of it.
            </p>
        </div>
    );
};

export default Blogs;