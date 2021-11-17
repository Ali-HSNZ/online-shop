
import CartPage from '../Pages/cart/CartPage'
import Home from '../Pages/Home/Home' 
import UserSignup from '../Pages/user/UserSignup'
import UserLogin from '../Pages/user/UserLogin'

// UserLogin
 const Routes = [
    {path : "/" , component : Home , exact : true},
    {path : "/cart",  component : CartPage},
    {path : "/user-signup",  component : UserSignup ,exact : true},
    {path : "/user-login",  component : UserLogin ,exact : true},
] 
export default Routes