import React from 'react';
import './cansultation.css';

export function Consultation() {
    return (
        <section className="consultation">
            <div className='wrapper'>
                <h2>Поможем подобрать светодиодный экран</h2>
                <form>
                    <input type="text" placeholder="Ваше имя" />
                    <input type="tel" placeholder="Телефон" />
                    <button type="submit">Заказать консультацию</button>
                </form>
                <div className="consultation__info">
                    <input type="checkbox" id="consent" />
                    <label htmlFor="consent">Я согласен на обработку персональных данных</label>
                </div>
            </div>
        </section>
    );
}