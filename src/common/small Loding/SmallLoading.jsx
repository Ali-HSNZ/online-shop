import Styles from './SmallLoading.module.css'
const SmallLoading = () => {
    return (  
        <div className={Styles.loader_wrapper}>
            <div className={Styles.loader}></div>
        </div>
    );
}
 
export default SmallLoading;