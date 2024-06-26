import React from 'react';
import { GrStar } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const HomeLeft = () => {

    return (
        // sidenav
        <div className='w-3/12 border-r border-gray'>
           <div className='pr-5'>
              {/* sidenav title */}
            <h5 className='uppercase text-lg font-semibold pb-3 border-b border-black'>Browse Books</h5>
            {/* sidenav item */}
            <div className='mt-5'>
                <h6 className='text-base text-black font-semibold'>Category</h6>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Books</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Staff Books</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Nook Books</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Teens</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Kids</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Hot Books</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Best Sellers</Link></p>
            </div>
            {/* sidenav item */}
            <div className='mt-5'>
                <h6 className='text-base text-black font-semibold'>Price</h6>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>10$ - 10.99$</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>20$ - 20.99$</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>30$ - 30.99$</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>40$ - 40.99$</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>50$ - 50$ and above</Link></p>
            </div>
            {/* sidenav item */}
            <div className='mt-5'>
                <h6 className='text-base text-black font-semibold'>Genres</h6>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>History</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Children & Book</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Business, Economy & Law</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Computing</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Crime & thriller</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Graphic Novels</Link></p>
                <p className='text-sm text-black2 mt-1 ease-linear hover:text-red hover:pl-1'><Link to='/'>Home & Garden</Link></p>
            </div>
            {/* sidenav item */}
            <div className='mt-5'>
                <h6 className='text-base text-black font-semibold pb-3 mb-8 border-b border-black'>Special Books</h6>
                <div>
                    {/* book item */}
                    <Link to='/' className='flex justify-between mb-5'>
                        <div className='w-4/12'>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/6/2/f/4/4d3a1fc7952f424f5d6d781191322c98.png.webp' className='w-full' alt='' />
                        </div>
                        <div className='w-7/12'>
                            <h4 className="text-sm font-semibold text-black truncate">A memory of light working day</h4>
                            <p className="text-sm text-gray truncate mt-0.5 mb-2">Md Abul Khayer Raihan</p>
                            <div className="flex">
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                            </div>
                            <div className="flex my-2">
                                <del className="text-base text-gray mr-2">$<span>20.00</span></del>
                                <p className="text-base text-red">$<span>35.00</span></p>
                            </div>
                        </div>
                    </Link>
                    {/* book item */}
                    <Link to='/' className='flex justify-between mb-5'>
                        <div className='w-4/12'>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/1/3/2/f/279a423da332f433b9fd74374a6e3b94.jpg.webp' className='w-full' alt='' />
                        </div>
                        <div className='w-7/12'>
                            <h4 className="text-sm font-semibold text-black truncate">A memory of light working day</h4>
                            <p className="text-sm text-gray truncate mt-0.5 mb-2">Md Abul Khayer Raihan</p>
                            <div className="flex">
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                            </div>
                            <div className="flex my-2">
                                <del className="text-base text-gray mr-2">$<span>25.00</span></del>
                                <p className="text-base text-red">$<span>22.00</span></p>
                            </div>
                        </div>
                    </Link>
                    {/* book item */}
                    <Link to='/' className='flex justify-between mb-5'>
                        <div className='w-4/12'>
                        <img src='https://www.noor-book.com/publice/covers_cache_webp/3/1/f/5/2ce9a9fe551f594f2493d3b63753b226.jpg.webp' className='w-full' alt='' />
                        </div>
                        <div className='w-7/12'>
                            <h4 className="text-sm font-semibold text-black truncate">A memory of light working day</h4>
                            <p className="text-sm text-gray truncate mt-0.5 mb-2">Md Abul Khayer Raihan</p>
                            <div className="flex">
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                                <GrStar className="book-card-star text-sm text-gray" />
                            </div>
                            <div className="flex my-2">
                                <del className="text-base text-gray mr-2">$<span>15.00</span></del>
                                <p className="text-base text-red">$<span>10.00</span></p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
           </div>
        </div>
    );
};

export default HomeLeft;