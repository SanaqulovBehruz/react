import React from 'react';
import './articles.css';
import Girls from '../image/Rectangle 26.png';

export function Article() {
    return (
        <section className="articles">
            <div className='wrapper'>
                <h2>Наши статьи</h2>
                <div className="articles-container">
                    <div className="article">
                        <img src={Girls} alt="Как выбрать светодиодные экраны" />
                        <div className="content">
                            <h3>Как выбрать светодиодные экраны</h3>
                            <p className="date">01.06.2023</p>
                            <p className="views">5000 просмотров</p>
                            <p className="read-more">Подробнее</p>
                        </div>
                    </div>
                    <div className="article active">
                        <img src={Girls} alt="Как выбрать светодиодные экраны" />
                        <div className="content">
                            <h3>Как выбрать светодиодные экраны</h3>
                            <p className="date">01.06.2023</p>
                            <p className="views">5000 просмотров</p>
                            <p className="read-more">Подробнее</p>
                        </div>
                    </div>
                    <div className="article">
                        <img src={Girls} alt="Как выбрать светодиодные экраны" />
                        <div className="content">
                            <h3>Как выбрать светодиодные экраны</h3>
                            <p className="date">01.06.2023</p>
                            <p className="views">5000 просмотров</p>
                            <p className="read-more">Подробнее</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}