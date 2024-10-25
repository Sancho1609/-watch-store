import React, { useState } from 'react';

function Checkout({ cartItems, totalPrice }) {
    const [isPaid, setIsPaid] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');

    const handlePayment = () => {
        // Проверка на заполнение полей
        if (!name || !email || !cardNumber || !expiryDate || !cvv) {
            setError('Пожалуйста, заполните все поля.');
            return;
        }

        // Здесь вы можете добавить логику для обработки платежа
        // Например, отправить данные на сервер

        // После успешной обработки платежа измените состояние
        setIsPaid(true);
    };

    return (
        <div>
            {isPaid ? (
                <h2 style={{ color: 'green' }}>Спасибо за покупку!</h2> // Изменение цвета на зеленый
            ) : (
                <div>
                    <h2>Оформление заказа</h2>
                    <h3>Ваши товары:</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>{item.name} - {item.price} ₸</li>
                        ))}
                    </ul>
                    <h3>Общая сумма: {totalPrice} ₸</h3>
                    
                    <h4>Введите ваши данные для оформления заказа:</h4>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <label>
                            ФИО:
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Электронная почта:
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Номер карты:
                            <input 
                                type="text" 
                                value={cardNumber} 
                                onChange={(e) => setCardNumber(e.target.value)} 
                                required 
                                maxLength="16" // Ограничение на длину номера карты
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Срок действия (MM/YY):
                            <input 
                                type="text" 
                                value={expiryDate} 
                                onChange={(e) => setExpiryDate(e.target.value)} 
                                required 
                                placeholder="MM/YY"
                                maxLength="5" // Ограничение на длину ввода
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            CVV:
                            <input 
                                type="text" 
                                value={cvv} 
                                onChange={(e) => setCvv(e.target.value)} 
                                required 
                                maxLength="3" // Ограничение на длину CVV
                            />
                        </label>
                    </div>
                    <button onClick={handlePayment}>Оплатить</button>
                </div>
            )}
        </div>
    );
}

export default Checkout;
