
import CartPage from '../Pages/cart/CartPage'
import Home from '../Pages/Home/Home' 
import Checkout from '../Pages/chackout/Checkout'
import CategoryPage from '../Pages/ProductsCategory/CategoryPage'
import Search from '../Pages/search/Search'
import ProductPage from '../Pages/product/ProductPage'
import FavoriteProducts from '../Pages/FavoriteProducts/FavoriteProducts'

 const Routes = [
    {path : "/" , component : Home , exact : true},
    {path : "/cart",  component : CartPage},
    {path : "/checkout",  component : Checkout ,exact : true},
    {path : "/category",  component : CategoryPage ,exact : true},
    {path : "/search",  component : Search ,exact : true},
    {path : "/product",  component : ProductPage ,exact : true},
    {path : "/favoriteProducts",  component : FavoriteProducts ,exact : true},

] 
export default Routes