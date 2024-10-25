import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import CasioImg from './Image/Casio.jpg';
import OmegaImg from './Image/Omega.jpg';
import RolexImg from './Image/Rolex.jpg';
import SeikoImg from './Image/Seiko.jpg';
import FossilImg from './Image/Fossil.jpg';
import SecondPage from './SecondPage'; // Импортируйте новую страницу
import ThirdPage from './ThirdPage'; // Импортируйте третью страницу
import Contacts from './Contacts'; // Импортируйте страницу контактов
import Cart from './Cart'; // Импортируйте компонент корзины
import Checkout from './Checkout'; // Импортируйте компонент оформления заказа

const products = [
    { id: 1, name: "CASIO", price: 56500, img: CasioImg },
    { id: 2, name: "OMEGA", price: 75000, img: OmegaImg },
    { id: 3, name: "ROLEX", price: 120900, img: RolexImg },
    { id: 4, name: "SEIKO", price: 45000, img: SeikoImg },
    { id: 5, name: "FOSSIL", price: 30000, img: FossilImg },
];

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <Router>
            <div className="App">
                <header>
                    <div className="header-container">
                        <h1>ЧАСЫ</h1>
                        <nav>
                            <ul>
                                <li><Link to="/">Главная</Link></li>
                                <li><Link to="/second">Бренды</Link></li>
                                <li><Link to="/contacts">Контакты</Link></li>
                            </ul>
                        </nav>
                        <div className="cart-container">
                            <Link to="/cart">Корзина ({cart.length})</Link>
                        </div>
                    </div>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <section id="main-banner">
                                    <h2>МУЖСКАЯ КОЛЛЕКЦИЯ Rolex®</h2>
                                    <p>Наша продукция обладает высоким качеством, и мы уверены, что вы оцените её достоинства.</p>
                                    <Link to="/third">
                                        <button>ПОДРОБНЕЕ</button>
                                    </Link>
                                </section>

                                <section id="shop">
                                    <h2>Популярные часы</h2>
                                    <div className="product-list">
                                        {products.map(product => (
                                            <div className="product" key={product.id}>
                                                <img src={product.img} alt={product.name} />
                                                <h3>{product.name}</h3>
                                                <p>Цена: {product.price} ₸.</p>
                                                <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </>
                        }/>
                        <Route path="/second" element={<SecondPage />} /> {/* Ваша вторая страница */}
                        <Route path="/third" element={<ThirdPage />} /> {/* Ваша третья страница */}
                        <Route path="/contacts" element={<Contacts />} /> {/* Ваша страница контактов */}
                        <Route path="/cart" element={<Cart items={cart} totalPrice={totalPrice} />} /> {/* Страница корзины */}
                        <Route path="/checkout" element={<Checkout cartItems={cart} totalPrice={totalPrice} />} /> {/* Страница оформления заказа */}
                    </Routes>
                </main>

                <footer>
                    <p className="marquee">&copy; 2024 Магазин часов. TEMIRGALIEV</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
