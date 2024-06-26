import React from 'react';
import AllBooksContainer from './AllBooksContainer/AllBooksContainer';
import {FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideNav from './SideNav/SideNav';

const Allbooks = () => {
    return (
        <div>
            <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
            <div className='flex justify-between'>
            <SideNav></SideNav>
            <AllBooksContainer></AllBooksContainer>
            </div>
        </div>
        </div>
    );
};

export default Allbooks;