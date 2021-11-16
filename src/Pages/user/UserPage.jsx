import Styles from './UserPage.module.css'
const UserPage = () => {
    return (  
        <div className={Styles.parent}>
           <div className={Styles.center}>
               <div className={Styles.header}><p> ثبت نام کاربر</p></div>
               
               <div className={Styles.group}>
                    <p dir="rtl">نام کاربری : </p>
                    <input type="text"  placeholder="نام کاربری خود را فارسی وارد کنید"/>
                    {/* <span>نام کاربری شما اشتباه است</span> */}

               </div>

               <div className={Styles.group}>
                    <p dir="rtl">ایمیل : </p>
                    <input type="email" placeholder="ایمیل خود را وارد کنید"/>
               </div>

               <div className={Styles.group}>
                    <p dir="rtl">شماره تماس : </p>
                    <input type="tel" placeholder="شماره همراه خود را وارد کنید"/>
               </div>

               <div className={Styles.group}>
                    <p dir="rtl">رمز عبور : </p>
                    <input type="password" placeholder="رمز عبور خود را به انگلیسی وارد کنید"/>
               </div>


               <div className={Styles.group}>
                    <p dir="rtl"> تکرار رمز عبور : </p>
                    <input type="password" placeholder="رمز عبور خود را تکرار کنید"/>
               </div>



               <button  className={Styles.submitBtn}>ثبت نام</button>
           </div>
        </div>
    );
}
 
export default UserPage;