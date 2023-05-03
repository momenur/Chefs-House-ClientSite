import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handelLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        signIn(email, password)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser, 'asi');
            form.reset()
        })
        .then(error => {
            console.log(error);
        })
    }
    
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handelLogIn} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                
                            </div>
                            <div className="mt-6 form-control">
                                <button className="btn btn-primary">Login</button>
                                <Link className='mt-4 font-semibold text-blue-800 underline' to='/register'>Register Now</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;