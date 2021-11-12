import Styles from './Slide.module.css'
import imageSrc from '../../image/slide.png'
const Slide = () => {
    return (
        <div className={Styles.box}>

        <div className={`${Styles.box_small1} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small2} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small3} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small4} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small5} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small6} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small7} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_small8} ${Styles.box_small}`}></div>
        <div className={`${Styles.box_medium1} ${Styles.box_medium}`}></div>
        <div className={`${Styles.box_medium2} ${Styles.box_medium}`}></div>
        <div className={`${Styles.box_medium3} ${Styles.box_medium}`}></div>
        <div className={`${Styles.box_medium4} ${Styles.box_medium}`}></div> 
        <div className={`${Styles.box_large1} ${Styles.box_large}`}></div>
        <div className={`${Styles.box_large2} ${Styles.box_large}`}></div>
        <div className={`${Styles.box_large3} ${Styles.box_large}`}></div>
        <div className={`${Styles.box_large4} ${Styles.box_large}`}></div> 

        <div className={Styles.center}>

            <div className={Styles.center_text_box}>
                  
                <nav className={Styles.nav_title}>آشنایی با زبان فارسی
                    <a href="#" className={Styles.nav_title_a}>توضیحات بیشتر</a>
                </nav>

                <p className={Styles.center_text_box_mention}  id="js_center_text_box_mention">
                دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
                </p> 
                      
            </div>
  
            <div className={Styles.img_box}>
                <img className={Styles.img} src={imageSrc}/>
            </div>
  
          </div>

    </div>
    );
}
 
export default Slide;