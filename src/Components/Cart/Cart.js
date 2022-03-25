import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, removeCart, singleCartToyRemove }) => {
    // console.log(cart);
    return (
        <div className='cart'>
            <h2>Selected toy</h2>
            <div className='table-div'>
                <table>

                    <tbody className='table-body'>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                        {
                            cart.map(toy =>

                                <tr key={toy.id}>
                                    <td><img src={toy.image} height='50px' width='50px' alt="" /> </td>
                                    <td>{toy.name}</td>
                                    <td className='remove-icon' onClick={() => singleCartToyRemove(toy.id)}> <FontAwesomeIcon icon={faRemove} size='sm' color='white' /></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='btn'>
                <button>Choose 1 For Me</button>
                <button onClick={() => removeCart()}>Remove Cart</button>
            </div>

        </div>
    );
};

export default Cart;