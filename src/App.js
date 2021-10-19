// bootstrap link 

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>

      <Router>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/Home">
            <Home></Home>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
