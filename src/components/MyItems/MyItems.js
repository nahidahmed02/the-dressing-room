import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';


const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getMyItems();
    }, [user])
    return (
        <div className='container'>
            <h2 className='headline text-center mt-4 mb-4 fw-bold'>Items Added By You : {myItems.length}</h2>
            {
                myItems.map(myItem => <MyItem
                    key={myItem._id}
                    myItem={myItem}
                ></MyItem>)
            }
        </div>
    );
};

export default MyItems;