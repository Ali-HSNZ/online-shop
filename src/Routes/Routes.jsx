
import CartPage from '../Pages/cart/CartPage'
import Home from '../Pages/Home/Home' 
import Checkout from '../Pages/chackout/Checkout'
import CategoryPage from '../Pages/ProductsCategory/CategoryPage'
import Search from '../Pages/search/Search'
import ProductPage from '../Pages/product/ProductPage'
import FavoriteProducts from '../Pages/FavoriteProducts/FavoriteProducts'

 const Routes = [
    {id : 0,path : "/" , component : Home , exact : true},
    {id : 1,path : "/cart",  component : CartPage},
    {id : 2,path : "/checkout",  component : Checkout ,exact : true},
    {id : 3,path : "/category",  component : CategoryPage ,exact : true},
    {id : 4,path : "/search",  component : Search ,exact : true},
    {id : 5,path : "/product",  component : ProductPage ,exact : true},
    {id : 6,path : "/favoriteProducts",  component : FavoriteProducts ,exact : true},

] 
export default Routes