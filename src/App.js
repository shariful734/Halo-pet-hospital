// bootstrap link 

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Banner/Banner';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div>

      <Header></Header>
      <Banner></Banner>
      <Services></Services>

    </div>
  );
}

export default App;
