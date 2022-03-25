import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Toy from '../Toy/Toy';
import './Store.css';
const Store = () => {

    const [toys, setToys] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(toys => setToys(toys));
    }, []);


    const addToCart = (id) => {
        const product = toys.find(toy => toy.id === id);


        const uniqueId = cart.filter(uniToy => uniToy.id !== id);
        const newCart = [...uniqueId, product];
        if (newCart.length <= 4) {
            setCart(newCart);
        }
    }

    const removeCart = () => {
        const newCart = [];
        setCart(newCart);
    }



    return (
        <div className='toy-body'>
            <div className='toy-product'>
                {
                    toys.map(toy => <Toy toy={toy} key={toy.id} addToCart={addToCart}></Toy>)
                }
            </div>
            <div>
                <Cart cart={cart} removeCart={removeCart} ></Cart>
            </div>
        </div>
    );
};

export default Store;