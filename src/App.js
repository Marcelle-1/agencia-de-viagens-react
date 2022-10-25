import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contato from './components/pages/Contato';
import Destinos from './components/pages/Destinos';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path="/destinos" element={ <Destinos />} />
          <Route path="/contato" element={ <Contato />} />
          <Route path="/login" element={ <Login />} />
        </Routes>
      <Footer />
      </Router>

    </div>
  );
}

export default App;
