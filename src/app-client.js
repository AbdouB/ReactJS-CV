import React from 'react';
import ReactDOM from 'react-dom';
import Profil from './components/Profil';
import Formation from './components/Formation';
import Experience from './components/Experience';

window.onload = () => {
    ReactDOM.render
    (
        <div className="container">
            <Profil /> 
            <Formation /> 
            <Experience />       
        </div>              
        , document.getElementById('app')
    );
}