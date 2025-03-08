import React from 'react';
import './contacts.css';
import whastup from '../image/logos_whatsapp-icon.png';
import telegram from '../image/logos_telegram.png';
import dzen from '../image/дзен.png';
import vk from '../image/entypo-social_vk-with-circle.png';

export function Contacts() {
    return (
        <section className="contact-section">
            <div className="wrapper">
                <div className="contact-container">
                    <div className="map">
                        <iframe 
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ayour-map-id&source=constructor" 
                            width="100%" height="100%" title="Company Location Map">
                        </iframe>
                    </div>
                    <div className="contact-info">
                        <h2>Контакты</h2>
                        <p>Телефон: <strong>88001234567</strong></p>
                        <p>Адрес:<strong>г. Москва, ул. Пупкина д.2 офис 777</strong></p>
                        <p>Реквизиты:</p>
                        <div className='left'>
                            <strong >ИНН: 123456789</strong>
                            <br></br>
                            <strong >ОГРН: 123456789123</strong>
                        </div>
                        <div className='social-icons'>
                            <div className="contact-block">
                                <h3>Мы в мессенджерах</h3>
                                <div className="icons">
                                    <p><img src={whastup} alt="WhatsApp" /></p>
                                    <p><img src={telegram} alt="Telegram" /></p>
                                </div>
                            </div>
                            <div className="contact-block">
                                <h3>Наши соцсети</h3>
                                <div className="icons">
                                    <p><img src={vk} alt="VK" /></p>
                                    <p><img src={dzen} alt="Social" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}