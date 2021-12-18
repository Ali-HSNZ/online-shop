import React from 'react';
import Styles from './Footer.module.css'

class Footer extends React.Component{
  render(){
    return (  
        <div className={Styles.parent}>
          <div>

            <p>Made with ♥ by Ali Hassanzadeh</p>
          </div>
        </div>
    );
  }
}
 
export default Footer;