import Styles from './UserPage.module.css'
const UserPage = () => {
    return (  
        <div className={Styles.parent}>
           <div className={Styles.center}>
               <div className={Styles.header}><p> ثبت نام کاربر</p></div>
               
               <div className={Styles.group}>
                    <p>نام کاربری : </p>
                    <input type="text"/>
               </div>
           </div>
        </div>
    );
}
 
export default UserPage;