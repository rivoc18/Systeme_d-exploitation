import React, { Component } from 'react';
//import './Signin.css';
class Signin extends Component{
  constructor(props){
		super(props);
		this.state={ isConnected : props.isConnected };
  }
  render(){
    return (<form>
        <div>
	<p> 
          <label >Veuillez saisir un nom</label>
          <input id="nom" type="text" name="text" size="10"/> 
	</p>  
	<p>        
	  <label >Veuillez saisir un prenom</label>
          <input id="prenom" type="text" name="text" size="10"/>
	</p>  
	<p> 
          <label >Veuillez saisir un mail</label>
          <input id="mail" type="text" name="text" size="10"/>
	</p>  
	<p> 
          <label >Veuillez saisir un login</label>
          <input id="login" type="text" name="text" size="10"/>
	</p>  
	<p> 
          <label >Veuillez saisir un mdp</label>
          <input id="mdp" type="text" name="text" size="10"/>
	</p>  	
        </div>
        <div>
          <input type="submit" value="inscription"/>
        </div>
      </form>);
  }
} 

export default Signin;
