import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from '../Context/cartContext/CartProvider';
import './App.css'
import UserProvider from '../Context/userProvider/UserProvider';
function App() {


      return (
            <Router>
                  <UserProvider>
                        <CartProvider>
                              <Layout>
                                    <ToastContainer  autoClose={4000} rtl={true} theme={"dark"}/>
                                    <Switch>
                                          {Routes.map((route,index) =>  <Route key={index} {...route}/>)}
                                    </Switch>
                              </Layout>
                        </CartProvider>
                  </UserProvider>
            </Router>
      );
}

export default App;
