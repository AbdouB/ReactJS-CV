import React from 'react';
import formations from '../data/formations';

export default class Formation extends React.Component{

    constructor(){
        super();
        this.state = {
            anneeFormation: "_17"
        };
    }


    changeFormation(e){
        this.setState({anneeFormation: e.target.value});
    }
    
    
    render(){
        const annee = this.state.anneeFormation;
        console.log(annee);
        return(
            <div className="formation w3-panel w3-card-4">
                <h4><span className="glyphicon glyphicon-education" aria-hidden="true"></span>Formations: </h4>
                <div className="row">
                    <div className="col-md-2 col-sm-4">
                        <select className="form-control" onChange={this.changeFormation.bind(this)}>
                            <option value="_17">2016/2017</option>
                            <option value="_16">2014/2016</option>
                            <option value="_14">2013/2014</option>
                            <option value="_13">2012/2013</option>
                        </select>              
                    </div>
                    <div className="col-md-10 col-sm-8 text-center">{formations[annee]}</div> 
                </div>
            </div>
             
        )
    }
}