import React from 'react';
import { GrStar } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const HomeDealWeek = () => {
    return (
        <section className='mb-8'>
            <div className='flex justify-between mb-5'>
            <h3 className='text-xl text-black font-semibold'>Deals of the week</h3>
            <button className='text-red underline'><Link to="/">See More</Link></button>
            </div>
            <div className='py-4 px-8 bg-black'>
                <div className='flex'>
                    <div>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/9/b/f/1/cdf115c6b4bf1a8c1ad4d07346f4b028.png.webp' className='h-80' alt=''/>
                    </div>
                    <div className='ml-12 mt-8'>
                        <h5 className='text-2xl text-red'>A memory of light working days</h5>
                        <p className='text-lg text-white'>Md. Abul Khayer Raihan</p>
                        <div className="flex">
                                <GrStar className="book-card-star text-lg text-gray" />
                                <GrStar className="book-card-star text-lg text-gray" />
                                <GrStar className="book-card-star text-lg text-gray" />
                                <GrStar className="book-card-star text-lg text-gray" />
                                <GrStar className="book-card-star text-lg text-gray" />
                        </div>
                        <p className='text-gray text-base'>Price: <span>$35</span></p>
                        <p className='text-gray text-base'>Deal Price: <span className='text-red'>$20</span></p>
                    </div>
                </div>
        </div>
        </section>
    );
};

export default HomeDealWeek;