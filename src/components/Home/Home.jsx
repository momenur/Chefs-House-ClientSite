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
                <div className='w-5/6 grid-cols-3 gap-4 pb-8 mx-auto md:grid'>
                    {
                        chefsData.map(chefData => <Chef key={chefsData.id} chefData={chefData}></Chef>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;