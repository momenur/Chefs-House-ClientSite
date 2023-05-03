import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="text-4xl font-extrabold text-red-500 ">Chefs House</a>
                <Link className="text-xl normal-case btn btn-ghost" to='/'>Home</Link>
                <Link className="text-xl normal-case btn btn-ghost" to='/blog'>Blog</Link>
                <Link className="text-xl normal-case btn btn-ghost" to='/login'>Login</Link>
                <Link className="text-xl normal-case btn btn-ghost" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;