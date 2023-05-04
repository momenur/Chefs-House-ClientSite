import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Header from '../Header/Header';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
           <Header></Header>
        </div>
    );
};

export default Home;