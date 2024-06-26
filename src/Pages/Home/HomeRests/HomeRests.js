import React from 'react';
import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';

const HomeRests = () => {
    return (
        <section>
            <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
                <div className='flex justify-between'>
                    <HomeLeft></HomeLeft>
                    <HomeRight></HomeRight>
                </div>
            </div>
        </section>
    );
};

export default HomeRests;