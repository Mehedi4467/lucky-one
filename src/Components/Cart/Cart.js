import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart }) => {
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

                                <tr>
                                    <td><img src={toy.image} height='50px' width='50px' alt="" /> </td>
                                    <td>{toy.name}</td>
                                    <div className='remove-icon'><td> <FontAwesomeIcon icon={faRemove} size='sm' color='white' /></td></div>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='btn'>
                <button>Choose 1 For Me</button>
                <button>Remove Cart</button>
            </div>

        </div>
    );
};

export default Cart;