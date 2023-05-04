import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('')

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        setRegisterError('')
        if(password.length < 6){
            setRegisterError('Password Must be 6 characters')
            console.log(registerError);
            return;
        }

        createUser(email, password)
        .then(result =>{
            const logedUser = result.user;
            console.log(logedUser)
            form.reset()
        })
        .catch(error => {
            console.log("Error",error);
        })
    }
    return (
        <div>
            <div className=" hero bg-neutral-500">
                <div className="flex-col hero-content">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-neutral-content">Register Now!</h1>
                    </div>
                    <form onSubmit={handelRegister} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required/>
                            </div>
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
                                <p className='mb-2 text-red-500'>{registerError}</p>
                                <button className="btn btn-primary">Register</button>
                                <Link className='mt-4 font-semibold text-blue-800 underline password' to='/login'>Login Now</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;