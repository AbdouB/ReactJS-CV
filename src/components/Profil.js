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
                            <div id="mainName" className="row text-right">{profil.nom} {profil.prenom}, {profil.age}, {profil.statut}.</div>
                            <div className="row text-right">{profil.adress}
                                <span><img className="icon" src="img/adress.svg"/></span>
                            </div>
                            <div className="row text-right">{profil.email}
                                <span><img className="icon" src="img/email.svg"/></span>
                            </div>
                            <div className="row text-right">{profil.phone}
                                <span><img className="icon" src="img/phone.svg"/></span>
                            </div>
                            <div className="row text-right">{profil.github}
                                <span><img className="icon" src="img/github.svg"/></span>
                            </div>
                        </div>               
                    </div>          
                </div>
            </div>
            
        );
    }
}