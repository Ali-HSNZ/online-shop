import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

import { Provider } from 'react-redux';

import store from '../feature/store';

function App() {
      return (
            <Provider store={store}>
                  <Router>
                        <Layout>
                              <ToastContainer  autoClose={4000} rtl={true} theme={"dark"}/>
                              <Switch>
                                    {Routes.map((route) =>  <Route key={route.id} {...route}/>)}
                              </Switch>
                        </Layout>
                  </Router>
            </Provider>
      );
}

export default App;
