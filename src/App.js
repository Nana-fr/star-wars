import { Outlet } from 'react-router-dom'

import './App.css';

import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Nav />
      <Outlet /> 
      <Footer />
    </div>
  );
}

export default App;
