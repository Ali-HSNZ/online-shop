import Styles from './Line.module.css'
const Line = ({title}) => {
    return (  
        <div className={Styles.parent}>
            <div></div>
            <p>{title}</p>
        </div>
    );
}
 
export default Line;