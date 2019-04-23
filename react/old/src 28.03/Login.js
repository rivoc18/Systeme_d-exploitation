import React, { Component } from 'react';
//import './Login.css';
class Login extends Component{
  constructor(props){
		super(props);
		this.state={ isConnected : props.isConnected };
  }
  render(){
    return (<form>
        <div>
        <p>  
          <label >Veuillez saisir un login</label>
          <input id="login" type="text" name="text" size="10"/>
         </p>  
         <p>  
          <label>Veuillez saisir un mdp</label>
          <input id="mdp" type="text" name="text" size="10"/>
          </p>  
        </div>
        <div>
          <input type="submit" value="connexion" onClick={()=>this.props.Login()}/>
        </div>
      </form>);
  }
}
export default Login;
