import React from 'react';
import Profil from '../components/Profil';
import Formation from '../components/Formation';
import Experience from '../components/Experience';
import Competence from '../components/Competence';

export default class Layout extends React.Component{

    render(){
        return(
            <div className="container">
                <Profil /> 
                <Formation /> 
                <Experience />
                <Competence />       
            </div>
        );
    }
}