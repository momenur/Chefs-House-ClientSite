import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext)

    // const [loginError, setLoginError] = useState('')

    const handelLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        // setLoginError('')
        // if(email === email && password === password){
        //     setLoginError('email or password does not match')
        //     console.log(loginError);
        //     return;
        // }

        signIn(email, password)
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser
                );
            form.reset()
        })
        .then(error => {
            console.log(error);
        })
    }

    //  Google Sign in

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser)
        })
        .then(error => {
            console.log(error)
        })
    }

    //  Github Sign In

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            const logedUser = result.user;
            console.log(logedUser);
        })
        .then(error => {
            console.log(error)
        })
    }
    
    return (
        <div>
            <div className=" hero bg-neutral-500">
                <div className="flex-col hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-neutral-content">Login now!</h1>
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
                                {/* <p className='mb-2 text-red-500'>{loginError}</p> */}
                                <button className="mb-4 btn btn-primary">Login</button>
                                <button onClick={handleGoogleSignIn} className="mb-4 btn btn-outline btn-primary">Sign IN With Google</button>
                                <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary">Sign In With Github</button>
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