import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from '../Context/cartContext/CartProvider';
import './App.css'

function App() {
  
  return (

        <Router>
              <CartProvider>
                  <Layout>
                        <ToastContainer  autoClose={6000} rtl={true} theme={"dark"}/>
                        <Switch>
                                {Routes.map((route,index) =>  <Route key={index} {...route}/>)}
                        </Switch>
                  </Layout>
              </CartProvider>
        </Router>
  );
}

export default App;
