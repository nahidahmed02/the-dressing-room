import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);

    const img = 'https://i.ibb.co/NZL3TdP/random.png';
    const email = user.email;

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Item added successfully!')
            })
    };
    return (
        <div className='container'>
            <h2 className='headline text-center mt-4 mb-4 fw-bold'>Add Item to The Inventory</h2>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" name='name' placeholder='Item Name' className='mb-2 w-50' required />
                <br />
                <textarea {...register("description")} type="text" name='description' placeholder='Description' className='mb-2 w-50' required />
                <br />
                <input {...register("price")} type="text" name='price' placeholder='Price' className='mb-2 w-50' required />
                <br />
                <input {...register("quantity")} type="number" name='quantity' placeholder='Quantity' className='mb-2 w-50' required />
                <br />
                <input {...register("supplier")} type="text" name='supplier' placeholder='Supplier' className='mb-2 w-50' required />
                <br />
                <input {...register("photo")} type="text" value={img} className='mb-2 w-50' readOnly />
                <br />
                <input {...register("email")} type="email" value={email} className='mb-2 w-50' readOnly />
                <br />
                <input type="submit" value="Add" className='btn btn-info px-5 mt-2 btn-lg' />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItem;