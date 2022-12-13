import React from 'react';
import './Blogs.css'

// answer to the questions
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

            <h2 className='Q-A mt-5'>Q: What is the difference between SQL and NoSQL?</h2>
            <p className='Q-A'>A: Some of the differences between SQL and NoSQL are given below-
                <br />
                <br />
                1. SQL databases have fixed or static or predefined schema. On the other side, NoSQL databases have dynamic schema.
                <br />
                2. Though SQL databases are vertically scalable but NoSQL databases are horizontally scalable.
                <br />
                3. Example of SQL database are - MySQL, Oracle, Sqlite etc.
                <br />
                Example of NoSQL database are - MongoDB, BigTable, Redis etc.
            </p>

            <h2 className='Q-A mt-5'>Q: What is the purpose of JWT and how does it work?</h2>
            <p className='Q-A'> A: JWT (JSON Web Token) sends securely transmitted information from client-side to server-side. JWT prevents an unauthorized user to access data.
                <br />
                When a user logged in, jwt creates a token from server. That token comes to client from server. When the user sends a request to backend, a copy of the token is send to the server for authorization with bearer. Then server verifies the token and responds to the client request.
            </p>
        </div>
    );
};

export default Blogs;