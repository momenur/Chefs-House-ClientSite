import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

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
        <div>
            <div className="navbar bg-neutral">
                <div>
                    <a className="text-4xl font-extrabold text-neutral-content ">Chefs House</a>
                    <div>
                        <Link className="text-xl normal-case btn btn-ghost text-neutral-content" to='/'>Home</Link>
                        <Link className="text-xl normal-case btn btn-ghost text-neutral-content" to='/blog'>Blog</Link>
                    </div>

                    <div>
                        {
                            user ? <>
                                <Link onClick={handelLogOut} className="text-xl normal-case btn btn-ghost text-neutral-content" to='/login'>Log Out</Link>
                            </> : <>
                                <Link className="text-xl normal-case btn btn-ghost text-neutral-content" to='/register'>Register</Link>
                                <Link className="text-xl normal-case btn btn-ghost text-neutral-content" to='/login'>Login</Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;