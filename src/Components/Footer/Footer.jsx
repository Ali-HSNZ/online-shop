import React from 'react';
import Styles from './Footer.module.css'

class Footer extends React.Component{
  render(){
    return (  
        <a className={Styles.parent} href = "mailto:Aliatraby@gmail.com">
            <p> ارسال </p>
            <p>Aliatraby@gmail.com : تماس با ما  </p>
        </a>
    );
  }
}
 
export default Footer;