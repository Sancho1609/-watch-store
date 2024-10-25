import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ items, totalPrice }) {
    return (
        <div>
            <h2>Корзина</h2>
            {items.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.name} - {item.price} ₸</li>
                        ))}
                    </ul>
                    <h3>Общая стоимость: {totalPrice} ₸</h3>
                    <Link to="/checkout">
                        <button>Перейти к оплате</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
