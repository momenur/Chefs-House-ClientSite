import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className="radial-progress text-primary" style={{"--value":70}}>70%</div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRouts;