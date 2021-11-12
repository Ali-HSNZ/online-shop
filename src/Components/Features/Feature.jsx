import Styles from './Feature.module.css'
import imageSrc from '../../image/1.png'
import guarantee from '../../image/guarantee.png'
import payment_method from '../../image/payment-method.png'
import replacement from '../../image/replacement.png'
import verification from '../../image/verification.png'

const Feature = () => {
    return (
        <div className={Styles.parent}>
            
            <div className={Styles.parent_features} dir="rtl">
                <div className={Styles.imgParent}>
                    <img src={imageSrc}/>
                </div>
                <div className={Styles.parent_features_text}>
                    {/* <p >۷ روز ضمانت بازگشت کالا</p>
                    <span >می توانید تا قبل از ۷ روز کالایی که خریده اید را پس‌ بدهید</span> */}
                    <p >پشتیبانی 24 ساعته</p>
                    <span >می توانید ۷ روز هفته، ۲۴ ساعته سوالات خود را از تیم پشتیبانی بپرسید</span>
                </div>
            </div>
            
            <div className={Styles.parent_features}>
                <div className={Styles.imgParent}>
                        <img src={guarantee}/>
                    </div>
                    <div className={Styles.parent_features_text}>
                        <p>کالای سالم</p>
                        <span dir="rtl">کالایی که دریافت می کنید سالم است. قبل ارسال، سلامت کالا بررسی می شود.</span>
                    </div>
            </div>

            <div className={Styles.parent_features}>
                <div className={Styles.imgParent}>
                        <img src={payment_method}/>
                </div>
                <div className={Styles.parent_features_text}>
                    <p>پرداخت در محل</p>
                    <span dir="rtl">می توانید کالا ها را پس از خرید  در بازه مشخص در محل خود دریافت کنید</span>
                </div>
            </div>

            <div className={Styles.parent_features}>
                <div className={Styles.imgParent}>
                    <img src={replacement}/>
                </div>
                <div className={Styles.parent_features_text}>
                    <p>بازگشت کالا</p>
                    <span dir="rtl">تا ۳۰ روز می توانید کالای خریداری شده را بیقید و شرط بازگردانید</span>
                </div>
            </div>

            <div className={Styles.parent_features}>
            <div className={Styles.imgParent}>
                    <img src={verification}/>
                </div>
                <div className={Styles.parent_features_text}>
                    <p>بازگشت کالا</p>
                    <span dir="rtl">تا ۳۰ روز می توانید کالای خریداری شده را بیقید و شرط بازگردانید</span>
                </div>
            </div>
        </div>
    );
}
export default Feature;


