import React from 'react';
import profil from '../data/profil';

export default class Profil extends React.Component{
    render(){
        return (
            <div className="profil w3-panel w3-card-4">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <img className="profil-image" src="img/profilimg.jpg" />
                    </div>  
                    <div className="col-md-8 col-sm-6 ">
                        <div>
                            <div className="row text-right"><h4>{profil.nom} {profil.prenom}, {profil.age}, {profil.statut}.</h4></div>
                            <div className="row text-right">{profil.adress}.</div>
                            <div className="row text-right">{profil.email}</div>
                            <div className="row text-right">{profil.phone}</div>
                            <div className="row text-right">{profil.github}</div>
                        </div>               
                    </div>          
                </div>
            </div>
            
        );
    }
}