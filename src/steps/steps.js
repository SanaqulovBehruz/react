import React from 'react';
import './steps.css';
import ellipse2 from '../image/Ellipse 2.svg';
import applicationEditOutline from '../image/mdi_application-edit-outline.svg';
import projectOutlined from '../image/eos-icons_project-outlined.svg';
import contractOutline from '../image/mdi_contract-outline.svg';
import industry from '../image/iconoir_industry.svg';
import settingWeb from '../image/icon-park-solid_setting-web.svg';
import delivery from '../image/carbon_delivery.svg';
import maintenance from '../image/wpf_maintenance.svg';
import arrow from '../image/Arrow 1.svg';

export function Steps() {
    return (
        <section className="etapiRaboti">
            <div className="wrapper">
                <h1> Этапы работы </h1>
                <div className="circle-box">
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={applicationEditOutline} alt="" />
                        </div>
                        <h3>Заявка</h3>
                    </div>
                    <div className="arrow-wrapper">
                        <img className="arrow" src={arrow} alt="#" />
                    </div>
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={projectOutlined} alt="" />
                        </div>
                        <h3>Разработка <br /> проекта</h3>
                    </div>
                    <div className="arrow-wrapper">
                        <img className="arrow" src={arrow} alt="#" />
                    </div>
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={contractOutline} alt="" />
                        </div>
                        <h3>Договор</h3>
                    </div>
                    <div className="arrow-wrapper">
                        <img className="arrow" src={arrow} alt="#" />
                    </div>
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={industry} alt="" />
                        </div>
                        <h3>Производство</h3>
                    </div>
                    <div className="arrow-wrapper">
                        <img className="arrow" src={arrow} alt="#" />
                    </div>
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={settingWeb} alt="" />
                        </div>
                        <h3>Настройка</h3>
                    </div>
                    <div className="arrow-wrapper">
                        <img className="arrow" src={arrow} alt="#" />
                    </div>
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={delivery} alt="" />
                        </div>
                        <h3>Доставка и <br /> монтаж</h3>
                    </div>
                    <div className="arrow-wrapper">
                        <img className="arrow" src={arrow} alt="#" />
                    </div>
                    <div className="circle">
                        <div className="icon-wrapper">
                            <img className="orange" src={ellipse2} alt="#" />
                            <img className="icon" src={maintenance} alt="" />
                        </div>
                        <h3>Гарантийное <br /> обслуживание</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}