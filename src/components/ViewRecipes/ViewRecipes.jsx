import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const ViewRecipes = () => {

    let { pathname } = useLocation();

    const id = pathname.split('/')[2] || ''

    const [singleChefData, setSingleChefData] = useState([])
    useEffect(() => {
        console.log(id)
        fetch(`https://shefa-house-momenurislam6-gmailcom.vercel.app/chefs/${id}`)
        .then(res => res.json())
        .then(data => setSingleChefData(data))
            
    }, [])



    return (
        <div className='bg-neutral-500'>
            <div className='w-5/6 mx-auto'>
                <div className='flex items-center gap-10'>
                    <div className='w-1/2'>
                        <h1 className='font-bold text-red-900 text-7xl'>{singleChefData.name}</h1>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full single-chef-img' src={singleChefData.photo} alt="" />
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default ViewRecipes;