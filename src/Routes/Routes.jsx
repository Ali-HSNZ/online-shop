
import CartPage from '../Pages/cart/CartPage'
import Home from '../Pages/Home/Home' 
import UserPage from '../Pages/user/UserPage'
 const Routes = [
    {path : "/" , component : Home , exact : true},
    {path : "/cart",  component : CartPage},
    {path : "/user",  component : UserPage ,exact : true},
] 
export default Routes