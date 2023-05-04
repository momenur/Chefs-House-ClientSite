import React from 'react';
import './chef.css'
import { Link } from 'react-router-dom';

const Chef = (props) => {
    const chef = props.chefData;
    console.log(chef);

    return (
        <div>
            <div className='mt-8 rounded-md bg-neutral-200'>
                <div className='flex justify-center pt-4 mb-4'>
                    <img className='rounded-lg chef-image' src={chef.photo} alt="" />
                </div>
                <div className='ps-10'>
                    <p className='text-xl font-semibold text-red-900'>Name: {chef.name}</p>
                    <p><span className='font-bold text-red-900'>Experience:  </span>  {chef.experience}</p>
                    <p><span className='font-bold text-red-900'>Recipes:  </span>  {chef.numberOfRecipes}</p>
                    <p><span className='font-bold text-red-900'>Likes:  </span> {chef.likes}</p>
                    <Link to={`/view/${chef.id}`}><button className='my-5 btn btn-sm'>View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;