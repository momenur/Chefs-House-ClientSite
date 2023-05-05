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

    console.log(singleChefData.view.recipeOne.recipesName);


    return (
        <div className='bg-neutral-500'>
            <div className='w-5/6 mx-auto'>
                <div className='flex items-center gap-10'>
                    <div className='w-1/2'>
                        <h1 className='text-5xl font-bold text-red-900'>{singleChefData.name}</h1>
                        <p className='mt-4 text-neutral-content'>I am {singleChefData.name}, i'm try my best for best cooking for <br /> you and your family . and make sure good food</p>
                        <p className='mt-1 text-xl font-bold text-neutral-content'><span className='me-4'>Likes: {singleChefData.likes}</span> <span>Recipes: {singleChefData.numberOfRecipes}</span></p>
                        <p className='mt-1 text-2xl font-bold text-red-900'><span className='me-4'> Experience: {singleChefData.experience}</span></p>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full single-chef-img' src={singleChefData.photo} alt="" />
                    </div>
                </div>
                {/* View Recipes Card Section */}
                <h1 className='pb-3 mt-24 text-5xl font-bold text-center text-red-900 border-b-2'>My Recipes</h1>
                <div>
                    <div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ViewRecipes;