
import CartPage from '../Pages/cart/CartPage'
import Home from '../Pages/Home/Home' 
import UserSignup from '../Pages/user/UserSignup'
import UserLogin from '../Pages/user/UserLogin'
import Profile from '../Pages/user/profile/Profile'
import Checkout from '../Pages/chackout/Checkout'
import CategoryPage from '../Pages/ProductsCategory/CategoryPage'

// UserLogin
 const Routes = [
    {path : "/" , component : Home , exact : true},
    {path : "/cart",  component : CartPage},
    {path : "/user-signup",  component : UserSignup ,exact : true},
    {path : "/user-login",  component : UserLogin ,exact : true},
    {path : "/user-profile",  component : Profile ,exact : true},
    {path : "/checkout",  component : Checkout ,exact : true},
    {path : "/category",  component : CategoryPage ,exact : true},
] 
export default Routes