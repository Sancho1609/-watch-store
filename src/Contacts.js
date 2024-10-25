import React from 'react';

function Contacts() {
    return (
        <div style={{ padding: '20px' }}>
            <center><h2>Контакты</h2></center>
            <p>Если у вас есть вопросы, пожалуйста, свяжитесь с нами:</p>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                <li><strong>Email:</strong> sanjar.temirgaliev@mail.ru</li>
                <li><strong>Телефон:</strong> +77082076538</li>
                <li><strong>Адрес:</strong> микрорайон-3, дом-12, Алматы 050000</li>
            </ul>

            {/* Секция с интерактивной картой */}
            <h3>Найдите нас на карте:</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000.1234567890!2d76.8498579!3d43.224064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369b59cdae4a1%3A0x1fb883bd928f122e!2z0YPQu9C70YzQvdC-0L7Qu9C10YDQvtCz0L4sIDIzLA!5e0!3m2!1sru!2skz!4v1697288145364!5m2!1sru!2skz"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen=""
                loading="lazy"
            ></iframe>

            {/* Форма обратной связи */}
            <h3>Свяжитесь с нами:</h3>
            <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' }}>
                <input type="text" placeholder="Ваше имя" required style={{ marginBottom: '10px', padding: '10px' }} />
                <input type="email" placeholder="Ваша почта" required style={{ marginBottom: '10px', padding: '10px' }} />
                <textarea placeholder="Ваше сообщение" required style={{ marginBottom: '10px', padding: '10px' }} />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Отправить
                </button>
            </form>

            {/* Ссылки на социальные сети */}
            <h3>Мы в социальных сетях:</h3>
            <div>
                <a href="https://instagram.com/temirga1iev" target="_blank" rel="noopener noreferrer">Instagram</a>
                <span> | </span>
                <a href="https://vk.com/temirgaliev_s" target="_blank" rel="noopener noreferrer">Vkontakte</a>
                <span> | </span>
                <a href="mailto:sanjar.temirgaliev@mail.ru" target="_blank" rel="noopener noreferrer">Pochta</a>
            </div>
        </div>
    );
}

export default Contacts;
