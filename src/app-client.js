import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './components/Profil';
import Formation from './components/Formation';

window.onload = () => {
    ReactDOM.render
    (
        <div className="container">
            <Profil /> 
            <Formation />        
        </div>              
        , document.getElementById('app')
    );
}