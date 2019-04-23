import React, { Component } from 'react';
import './MainPage.css';
import NavigationPannel from './NavigationPannel';
import Signin from './Signin';
class MainPage extends Component{
	constructor(props){
		super(props);
		this.state={ isConnected : false };
		this.getConnected = this.getConnected.bind(this);
		this.setLogout = this.setLogout.bind(this);
	}
	getConnected(){
		this.setState({isConnected : true});
	}
	setLogout(){
		this.setState({isConnected : false});
	}

	render(){
		return (
		 <div>
			<header >
			  <div id="haut" className="p">
				<div className="p" >logo </div>
				<div className="p">zone de recherche</div>
				<div className="p">lien deconnexion</div>
			  </div>
			</header>
			<div >
			  <div className="p" id="stats">
				 <NavigationPannel  
					 Login={this.getConnected} 
					 Logout={this.setLogout}
					 isConnected={this.state.isConnected} 
				 />
				 <div className="p retour"  >
					{this.state.isConnected === true ? "": <Signin/> }
				 </div>
			  </div>
			  <div className="p" id="contenu">
				<div className="p" id="new_texte">
				  new_texte
				</div>
				<div className="p" id="liste_texte">
				  liste_texte
				</div>
			  </div>
			</div>
		  </div>
		  );
	}
}

export default MainPage;
