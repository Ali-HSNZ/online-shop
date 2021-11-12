import Styles from  "./ProductList.module.css"
import image1 from '../../image/11.png'
import { BiHeart , BiBookmark , BiPlusCircle  ,BiMinusCircle } from "react-icons/bi";
import check_mark from '../../image/check.png'
import garanty from '../../image/badge.png'
import delivery from '../../image/delivery.png'

const ProductList = () => {
    return (  
        <div className={Styles.parent} dir="rtl">


            <div className={Styles.item} dir="ltr">
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <button>خرید محصول</button>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div>


             <div className={Styles.item} dir="ltr">
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <BiPlusCircle style={{cursor:'pointer'}} size="1.7em"/>
                        <p>1</p>
                       <BiMinusCircle style={{cursor:'pointer'}}  size="1.7em"/>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div>


            <div className={Styles.item} dir="ltr">
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <BiPlusCircle style={{cursor:'pointer'}} size="1.7em"/>
                        <p>1</p>
                       <BiMinusCircle style={{cursor:'pointer'}}  size="1.7em"/>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div>


            <div className={Styles.item} dir="ltr">
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <button>خرید محصول</button>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div>


            <div className={Styles.item} dir="ltr">
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <button>خرید محصول</button>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div>


         {/*   <div className={Styles.item}>
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <button>خرید محصول</button>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div>

            <div className={Styles.item}>
                <div className={Styles.imgParent}>
                    <img src={image1}/>
                    <div className={Styles.like_bookMark_parent}>
                        <div className={Styles.like_bookMark_div}>
                            <div><BiHeart size="1.7em"/></div>
                            <div><BiBookmark size="1.7em"/></div>
                        </div>
                    </div>
                </div>


                <div className={Styles.titleParent}>
                    <p className={Styles.title} dir="rtl">گوشی سامسونگ مدل  A51</p>
                </div>


                <div className={Styles.describtion}>
                    <div><p>گارانتی مادام العمر</p><img src={garanty}/></div>
                    <div><p>اورجینال</p> <img src={check_mark}/></div>
                    <div><p>ارسال رایگان</p> <img src={delivery}/></div>
                </div>


                <div className={Styles.footer}>
                    <div className={Styles.addToCartParent}>
                        <button>خرید محصول</button>
                    </div>

                    <div className={Styles.price}>
                        <p>۲۱,۰۰۰,۰۰۰</p>
                        <p>۲۰,۱۵۰,۰۰۰</p>
                    </div>
                    
                </div>

            </div> */}








        </div>
    );
}
 
export default ProductList;