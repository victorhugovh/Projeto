import React from 'react';
import Menu from './Components/Menu/menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Footer from './Components/Pages/Footer/footer';

function App() {
  return (
    <>
      <Menu />
      <Footer/>
    </>
  );
}

export default App;