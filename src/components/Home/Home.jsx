import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Header from '../Header/Header';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const user = useContext(AuthContext)



    const chefsData = useLoaderData();
    return (
        <div>
            <Header></Header>

            <div className='bg-neutral-500'>
                <h1 className='pt-12 pb-3 text-5xl font-bold text-center text-red-900 border-b-2'>Our Chefs</h1>
                <div className='grid-cols-3 gap-4 pb-8 mx-auto md:grid'>
                    {
                        chefsData.map(chefData => <Chef key={chefsData.id} chefData={chefData}></Chef>)
                    }
                </div>

                {/* Happy Client SEction */}
                <h1 className='pt-12 pb-3 text-5xl font-bold text-center text-red-900 border-b-2'>Happy Client Review</h1>
                <div className='w-5/6 mx-auto'>
                    <div className='py-4'>
                        <h1 className='pt-16 text-4xl font-semibold text-red-900'>Name: Jubayer Hasan</h1>
                        <h2 className='font-semibold text-neutral-200'>Review: dolor sit amet, consectetur adipisicing elit. Quasi nobis perspiciatis praesentium ipsum minima hic quos assumenda sint libero accusantium aspernatur vel, modi dolorem debitis tempore velit harum reiciendis nesciunt molestiae quo explicabo iure ratione! Dolores, impedit, fuga sunt porro repellat reprehenderit earum magnam ratione aliquid minus deleniti. Eligendi, a. </h2>
                    </div>
                    <div className='py-4'>
                        <h1 className='mb-4 text-4xl font-semibold text-red-900'>Name: Jubayer Hasan</h1>
                        <h2 className='font-semibold text-neutral-200'>Review: dolor sit amet, consectetur adipisicing elit. Quasi nobis perspiciatis praesentium ipsum minima hic quos assumenda sint libero accusantium aspernatur vel, modi dolorem debitis tempore velit harum reiciendis nesciunt molestiae quo explicabo iure ratione! Dolores, impedit, fuga sunt porro repellat reprehenderit earum magnam ratione aliquid minus deleniti. Eligendi, a. </h2>
                    </div>
                    <div className='py-4'>
                        <h1 className='mb-4 text-4xl font-semibold text-red-900'>Name: Jubayer Hasan</h1>
                        <h2 className='font-semibold text-neutral-200'>Review: dolor sit amet, consectetur adipisicing elit. Quasi nobis perspiciatis praesentium ipsum minima hic quos assumenda sint libero accusantium aspernatur vel, modi dolorem debitis tempore velit harum reiciendis nesciunt molestiae quo explicabo iure ratione! Dolores, impedit, fuga sunt porro repellat reprehenderit earum magnam ratione aliquid minus deleniti. Eligendi, a. </h2>
                    </div>
                    <div className='py-4'>
                        <h1 className='mb-4 text-4xl font-semibold text-red-900'>Name: Jubayer Hasan</h1>
                        <h2 className='font-semibold text-neutral-200'>Review: dolor sit amet, consectetur adipisicing elit. Quasi nobis perspiciatis praesentium ipsum minima hic quos assumenda sint libero accusantium aspernatur vel, modi dolorem debitis tempore velit harum reiciendis nesciunt molestiae quo explicabo iure ratione! Dolores, impedit, fuga sunt porro repellat reprehenderit earum magnam ratione aliquid minus deleniti. Eligendi, a. </h2>
                    </div>
                    <div className='py-4'>
                        <h1 className='mb-4 text-4xl font-semibold text-red-900'>Name: Jubayer Hasan</h1>
                        <h2 className='font-semibold text-neutral-200'>Review: dolor sit amet, consectetur adipisicing elit. Quasi nobis perspiciatis praesentium ipsum minima hic quos assumenda sint libero accusantium aspernatur vel, modi dolorem debitis tempore velit harum reiciendis nesciunt molestiae quo explicabo iure ratione! Dolores, impedit, fuga sunt porro repellat reprehenderit earum magnam ratione aliquid minus deleniti. Eligendi, a. </h2>
                    </div>
                    <div className='py-4 pb-12'>
                        <h1 className='mb-4 text-4xl font-semibold text-red-900'>Name: Jubayer Hasan</h1>
                        <h2 className='font-semibold text-neutral-200'>Review: dolor sit amet, consectetur adipisicing elit. Quasi nobis perspiciatis praesentium ipsum minima hic quos assumenda sint libero accusantium aspernatur vel, modi dolorem debitis tempore velit harum reiciendis nesciunt molestiae quo explicabo iure ratione! Dolores, impedit, fuga sunt porro repellat reprehenderit earum magnam ratione aliquid minus deleniti. Eligendi, a. </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;