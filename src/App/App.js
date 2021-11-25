import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from '../Context/cartContext/CartProvider';
import './App.css'
import UserProvider, { UserDispatch } from '../Context/userProvider/UserProvider';
import { useEffect } from 'react';

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
