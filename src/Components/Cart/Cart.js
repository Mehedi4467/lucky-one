import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    return (
        <div className='cart'>
            <h2>Selected toy</h2>
            <table>

                <tbody className='table-body'>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>product img</td>
                        <td>Product Name</td>
                        <td className='remove-icon'> <FontAwesomeIcon icon={faRemove} size='sm' /></td>
                    </tr>
                </tbody>
            </table>

            <div className='btn'>
                <button>Choose 1 For Me</button>
                <button>Remove Cart</button>
            </div>

        </div>
    );
};

export default Cart;