import {BrowserRouter as Router,Route , Switch } from 'react-router-dom';

import Layout from '../Layout/Layout'
import Routes from '../Routes/Routes';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (

  <Router>
      <Layout>
    <ToastContainer theme="colored" rtl={true} style={{fontFamily:"iransansweb"}}/>
             
                  <Switch>
                      {
                          
                            Routes.map((route,index) => (
                                <Route key={index} {...route}/>
                            ))
                      }
                  </Switch>

      </Layout>

</Router>
    

   
  );
}

export default App;
