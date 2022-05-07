import React from 'react';
import Banner from '../Banner/Banner';
import CustomerCenter from '../CustomerCenter/CustomerCenter';
import Expertise from '../Expertise/Expertise';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Expertise></Expertise>
            <CustomerCenter></CustomerCenter>
        </div>
    );
};

export default Home;