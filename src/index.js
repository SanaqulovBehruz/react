import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { Steps } from './steps/steps';
import { Consultation } from './cansultation/cansultation';
import {Clients} from './clients/clients';
import { Article } from './articles/articles';
import {Footer} from './footer/footer';
import { Contacts } from './contacts/contacts';

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <Steps />
        <Consultation />
        <Clients />
        <Article />
        <Contacts />
        <Footer />
    </div>
);