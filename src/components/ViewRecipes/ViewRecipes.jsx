import React, { useContext, useEffect, useState } from 'react';
import { Await, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProviders';

const ViewRecipes = () => {

    let { pathname } = useLocation();

    const id = pathname.split('/')[2] || ''
    const [loadingData, setLoadingDara] = useState(true)
    const [singleChefData, setSingleChefData] = useState([])
    const [tost, setTost] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://shefa-house-momenurislam6-gmailcom.vercel.app/chefs/${id}`)
            result.json().then(json => {
                setSingleChefData(json);
                setLoadingDara(false)
            })

        }
        fetchData();
    }, [])

    console.log(singleChefData);

    if (loadingData) {
        return
    }
    const a = singleChefData.view.recipeOne;
    const b = singleChefData.view.recipeTwo;
    const c = singleChefData.view.recipeThree;


    // console.log(singleChefData.view.recipeOne);

    // Tost
   
    
    const notify = () => toast("Wow so easy!");
    const favoriteTost = () => {
        notify()
        setTost(false)
        x.disabled = true ;
    }
    const disable = (x) =>{
        x.disable = true;
    } 
    

    


    return (
        <div className='bg-neutral-500'>
            <div className='w-5/6 mx-auto bg-neutral-400'>
                <div className='flex items-center gap-10 px-8'>
                    <div className='w-1/2'>
                        <h1 className='text-5xl font-bold text-red-900'>{singleChefData.name}</h1>
                        <p className='mt-4 text-neutral-content'>I am {singleChefData.name}, i'm try my best for best cooking for <br /> you and your family . and make sure good food</p>
                        <p className='mt-1 text-xl font-bold text-neutral-content'><span className='me-4'>Likes: {singleChefData.likes}</span> <span>Recipes: {singleChefData.numberOfRecipes}</span></p>
                        <p className='mt-1 text-2xl font-bold text-red-900'><span className='me-4'> Experience: {singleChefData.experience}</span></p>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full mt-4 rounded-md single-chef-img' src={singleChefData.photo} alt="" />
                    </div>
                </div>

                {/* View Recipes Card Section */}
                <h1 className='pb-3 mt-24 text-5xl font-bold text-center text-red-900 border-b-2'>My Recipes</h1>
                <div>
                    <div className='w-5/6 grid-cols-3 gap-4 pb-8 mx-auto md:grid'>
                        <div className='mt-8 rounded-md bg-neutral-200'>
                            <div className='flex justify-center pt-4 mb-4'>
                                <img className='rounded-lg chef-image' src={a.img} alt="" />
                            </div>
                            <div className='ps-10'>
                                <p className='text-xl font-semibold text-red-900'>Name: {a.recipesName}</p>
                                <p><span className='font-bold text-red-900'>Experience: </span> {a.ingredients}</p>
                                <p><span className='font-bold text-red-900'>Recipes: </span> {a.method}</p>
                                <div className='my-4'>
                                    <button onClick={favoriteTost} className=' btn btn-sm'>Favorite</button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 rounded-md bg-neutral-200'>
                            <div className='flex justify-center pt-4 mb-4'>
                                <img className='rounded-lg chef-image' src={b.img} alt="" />
                            </div>
                            <div className='ps-10'>
                                <p className='text-xl font-semibold text-red-900'>Name: {b.recipesName}</p>
                                <p><span className='font-bold text-red-900'>Experience: </span> {b.ingredients}</p>
                                <p><span className='font-bold text-red-900'>Recipes: </span> {b.method}</p>
                                <div className='my-4'>
                                    <button onClick={favoriteTost} className=' btn btn-sm'>Favorite</button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 rounded-md bg-neutral-200'>
                            <div className='flex justify-center pt-4 mb-4'>
                                <img className='rounded-lg chef-image' src={c.img} alt="" />
                            </div>
                            <div className='ps-10'>
                                <p className='text-xl font-semibold text-red-900'>Name: {c.recipesName}</p>
                                <p><span className='font-bold text-red-900'>Experience: </span> {c.ingredients}</p>
                                <p><span className='font-bold text-red-900'>Recipes: </span> {c.method}</p>
                                <div className='my-4'>
                                    <button onClick={favoriteTost} className=' btn btn-sm'>Favorite</button>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewRecipes;