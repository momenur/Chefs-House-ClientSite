import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogOut = () => {
        logOut()
        .then(result = () => {})
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="text-4xl font-extrabold text-blue-800 ">Chefs House</a>
                <Link className="text-xl normal-case btn btn-ghost" to='/'>Home</Link>
                <Link className="text-xl normal-case btn btn-ghost" to='/blog'>Blog</Link>

                {
                    user ? <>
                        <Link onClick={handelLogOut} className="text-xl normal-case btn btn-ghost" to='/login'>Log Out</Link>
                    </> : <>
                        <Link className="text-xl normal-case btn btn-ghost" to='/login'>Login</Link>
                    </>
                }

                <Link className="text-xl normal-case btn btn-ghost" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;