import React from 'react';
import Styles from './Footer.module.css'

class Footer extends React.Component{
  render(){
    return (  
        <div className={Styles.parent}>
            <p>Made with ♥ by Ali Hassanzadeh</p>
        </div>
    );
  }
}
 
export default Footer;