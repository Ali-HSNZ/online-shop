import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import { Provider } from 'react-redux';

import store from '../redux/store';

function App() {
      return (
            <Router>
                 <Provider store={store}>
                        <Layout>
                              <ToastContainer  autoClose={4000} rtl={true} theme={"dark"}/>
                              <Switch>
                                    {Routes.map((route,index) =>  <Route key={index} {...route}/>)}
                              </Switch>
                        </Layout>
                 </Provider>
            </Router>
      );
}

export default App;
