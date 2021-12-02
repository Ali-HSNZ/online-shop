import Styles from './SmallLoading.module.css'

const SmallLoading = ({color}) => {


    return (  
        <div className={Styles.loader_wrapper} >
            <div className={`${color && `${Styles["loader"+color]}` } ${ Styles.loader}`} ></div>
        </div>
    );
}
 
export default SmallLoading;