import React from 'react';

export default class Competence extends React.Component{

    constructor(){
        super();
        this.state={
            category: "Technologies"
        }
    }

    changeCategory(e){
        console.log(e.target.text);
        this.setState({category: e.target.text});
    }
    render(){
        const category = this.state.category;
        const technologies = (category === "Technologies")? "active" : "";
        const langageProg = (category === "Langages de programmation")? "active" : "";
        const bd = (category === "Bases de données")? "active" : "";
        const systemExploitation = (category === "Systèmes d’exploitation")? "active" : "";
        const outils = (category === "Autres outils")? "active" : "";

        const categories = [
            ["Technologies", technologies],
            ["Langages de programmation", langageProg],
            ["Bases de données", bd],
            ["Systèmes d’exploitation", systemExploitation],
            ["Autres outils", outils]
        ].map((categorie, i) => 
            <li role="presentation" className={categorie[1]}><a key={i} onClick={this.changeCategory.bind(this)}>{categorie[0]}</a></li>
            );

        
        return(
            <div className="competence w3-panel w3-card-4">
                <h3><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>Compétences techniques: </h3>
                <ul className="nav nav-tabs" >
                    {categories}
                </ul>
                <div>{category}</div>
            </div>
        );
    }
}