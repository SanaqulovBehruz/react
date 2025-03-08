import React from 'react';
import './footer.css';
import whastup from '../image/logos_whatsapp-icon.png';
import telegram from '../image/logos_telegram.png';
import dzen from '../image/дзен.png';
import vk from '../image/entypo-social_vk-with-circle.png'

export function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-section company">
                    <h2>PRIZMATECH</h2>
                    <p className="phone">88001234567</p>
                    <p>г. Москва ул. Пупкина д.2 офис 777</p>
                    <p>Время работы: 8:00 - 20:00</p>
                </div>
                <div className="footer-section products">
                    <h3>Продукция</h3>
                    <ul>
                        <li>Уличные светодиодные экраны</li>
                        <li>Внутренние светодиодные экраны</li>
                        <li>Светодиодные экраны для стадионов</li>
                        <li>Светодиодные экраны для ТЦ</li>
                        <li>Медиафасады</li>
                        <li>Гибкие светодиодные экраны</li>
                        <li>Прозрачные светодиодные экраны</li>
                    </ul>
                </div>
                <div className="footer-section services">
                    <h3>Услуги</h3>
                    <ul>
                        <li>Монтаж светодиодных экранов</li>
                        <li>Проектирование</li>
                        <li>Визуализация объекта</li>
                        <li>Изготовление металлоконструкций</li>
                        <li>Сервисное обслуживание</li>
                        <li>Экспертиза</li>
                        <li>Выездная демонстрация оборудования</li>
                    </ul>
                </div>
                <div className="footer-section contacts">
                    <h3>Мы в мессенджерах</h3>
                    <p>
                        <img src={whastup} alt="WhatsApp" />
                        <img src={telegram} alt="Telegram" />
                    </p>
                    <h3>Наши соцсети</h3>
                    <p>
                        <img src={vk} alt="VK" />
                        <img src={dzen} alt="Social Media" />
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="wrapper">
                    <p>@PRIZMATECH 2011-2023</p>
                    <p>ИНН: 123456789</p>
                    <p>ОГРН: 123456789123</p>
                    <p className='bottom'>Любое использование, либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления может осуществляться лишь с разрещения автора </p>
                </div>
            </div>
        </footer>
    );
}