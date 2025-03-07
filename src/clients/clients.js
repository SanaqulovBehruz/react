import React from 'react';
import './clients.css';
import Xn from '../image/Xn Partners - png.png';
import Archive from '../image/Archive svg.png';
import Redbull from '../image/Red Bull svg.png';
import Nestle from '../image/Nestlé svg.png';

export function Clients() {
    return (
        <section className="clients">
            <div className='wrapper'>
                <h2>Наши клиенты</h2>
                <div className="clients-container">
                    <button className="prev">←</button>
                    <div className="img-container">
                        <img src={Xn} alt="Client 1" />
                        <img src={Archive} alt="Client 2" />
                        <img src={Redbull} alt="Client 3" />
                        <img src={Nestle} alt="Client 4" />
                    </div>
                    <button className="next">→</button>
                </div>
            </div>
        </section>
    );
}