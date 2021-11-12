
import CartPage from '../Pages/cart/CartPage'
import Home from '../Pages/Home/Home' 
 const Routes = [
    {path : "/" , component : Home , exact : true},
    {path : "/cart",  component : CartPage ,exact : true},
] 
export default Routes