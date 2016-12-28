import React from 'react';
import experiences from '../data/experiences';

export default class Experience extends React.Component{

    constructor(){
        super();
        this.state = {
            id: "cosumar"
        };
    }

    changeExperience(e){
        console.log(e.target.value);
        this.setState({id: e.target.value})
    }

    render(){
        
        const id = this.state.id;
        console.log(id);
        console.log(experiences[id].titre);
        return(
            <div className="experience w3-panel w3-card-4">
                <h3><span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>Experiences: </h3>
                <div className="row">
                    <div className="col-md-2 col-sm-4">
                        <select className="form-control" onChange={this.changeExperience.bind(this)}>
                            <option value="cosumar">Cosumar</option>
                            <option value="pfe">Projet de fin d’étude</option>
                        </select>              
                    </div>
                    <div className="col-md-10 col-sm-8 text-center">
                        <h3>{experiences[id].titre}</h3><br/>
                        {experiences[id].projets.map((projet, i) =>
                            <div>
                                <h5>-{projet.titre}</h5>
                                 <span><img className="icon" src="img/github-reversed.svg"/></span>
                                 <a href={projet.github}>Source code</a>
                                <hr />
                            </div>
                        )}
                    </div> 
                </div>
            </div>
        )
    }
}