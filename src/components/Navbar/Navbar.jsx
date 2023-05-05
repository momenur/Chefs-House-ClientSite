import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
            .then(result = () => { })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=''>
            <div className="navbar bg-neutral">
                <div className='w-5/6 mx-auto'>
                    <a className="text-4xl font-extrabold text-red-400 ">Chefs House</a>
                    <div className="text-xl normal-case btn btn-ghost text-neutral-content">
                        <ActiveLink to='/'>Home</ActiveLink>
                    </div>
                    <div className="text-xl normal-case btn btn-ghost text-neutral-content">
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </div>

                    <div>
                        {
                            user ? <>
                                <div onClick={handelLogOut} className="text-xl normal-case btn btn-ghost text-neutral-content">
                                    <ActiveLink  to='/login'>Log Out</ActiveLink>
                                </div>

                            </> : <>
                                <div className="text-xl normal-case btn btn-ghost text-neutral-content">
                                    <ActiveLink className="text-xl normal-case btn btn-ghost text-neutral-content" to='/register'>Register</ActiveLink>
                                </div>
                                <div className="text-xl normal-case btn btn-ghost text-neutral-content">
                                    <ActiveLink to='/login'>Login</ActiveLink>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;