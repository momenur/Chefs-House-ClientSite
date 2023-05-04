import React from 'react';
import image from '../../assets/young-baker-holding-some-bread-with-thumb-up.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className=' bg-neutral-500'>
            <div className='w-5/6 mx-auto bg-white rounded-b-md'>
                <div className='items-center gap-10 md:flex'>
                    <div className='ps-8'>
                        <h1 className='font-semibold header-text sm:text-xl md:text-7xl text-neutral'>Your <span className='font-bold text-red-900'>Best</span> Food Is <br /> Our <span className='font-bold text-red-900'>Commitment</span></h1>
                        <p className='font-semibold text-red-900 md:text-xl'>Always Stay With Chefs <br /> House & Confirm Your Best Food <br /> <span className='text-sm text-black'>Feedback: chefs.house.best.food@gmail.com</span></p>
                    </div>
                    <div className='flex Header-img'>
                        <img className='ms-auto' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;