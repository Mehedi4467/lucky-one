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

    // add to cart function
    const addToCart = (id) => {
        const exists = cart.find(toy => toy.id === id);
        if (!exists) {

            const product = toys.find(toy => toy.id === id);

            const uniqueId = cart.filter(uniToy => uniToy.id !== id);

            const newCart = [...uniqueId, product];
            if (newCart.length <= 4) {
                setCart(newCart);
            }
        }

    }
    // remove all cart item
    const removeCart = () => {
        const newCart = [];
        setCart(newCart);
    }

    //remove single cart item
    const singleCartToyRemove = (id) => {

        const deleteIndex = cart.map((deleteItem, index) => deleteItem.id === id ? index : false);
        let newCart = [...cart];
        if (deleteIndex) {
            newCart.splice(deleteIndex, 1);
        }
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
                <Cart cart={cart} removeCart={removeCart} singleCartToyRemove={singleCartToyRemove}></Cart>
            </div>
        </div>
    );
};

export default Store;