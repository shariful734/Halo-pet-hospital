// bootstrap link 

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';

import ServiceDetails from './Pages/serviceDetail/ServiceDetail/ServiceDetails';
import AboutUs from './Pages/AboutUs/AboutUs';
import ToPetOwner from './Pages/ToPetOwner/ToPetOwner';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>

      <AuthProvider>
        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/Home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/ToPetOwner">
              <ToPetOwner></ToPetOwner>
            </PrivateRoute>

            <Route path="/AboutUs">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/Login">
              <Login></Login>
            </Route>

            <Route path="/SignUp">
              <SignUp></SignUp>
            </Route>

            <PrivateRoute path="/serviceDetail/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
