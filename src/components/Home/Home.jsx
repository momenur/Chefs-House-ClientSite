import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Header from '../Header/Header';

const Home = () => {
    const user = useContext(AuthContext)

    const [chefsData, setChefsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefsData(data))
            .catch(error => console.log(error))
}, [])
console.log(chefsData);
return (
    <div>
        <Header></Header>
    </div>
);
};

export default Home;