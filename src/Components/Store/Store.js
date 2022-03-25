import React, { useEffect, useState } from 'react';

const Store = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(toys => setToys(toys));
    }, []);


    return (
        <div>
            <div className='toy-header'>
                <h1>Hello world</h1>
            </div>
        </div>
    );
};

export default Store;