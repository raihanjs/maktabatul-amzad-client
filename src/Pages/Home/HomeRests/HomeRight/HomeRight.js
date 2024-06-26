import React from 'react';
import HomeDealWeek from './HomeDealWeek/HomeDealWeek';
import NewProducts from './NewProducts/NewProducts';

const HomeRight = () => {
    return (
        <div className='w-9/12'>
            <div className='ml-8'>
                <HomeDealWeek></HomeDealWeek>
                <NewProducts></NewProducts>
            </div>
        </div>
    );
};

export default HomeRight;