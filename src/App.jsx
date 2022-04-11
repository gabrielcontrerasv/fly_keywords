//import Login from "./components/login";
import "./App.css";
//import { Navbar } from "./components/navbar";
import Footer from "./components/footer/footer";
//import Cambiar from "./components/scripts/cambiar";
import { quotes } from "./components/data/data";
import "bootstrap/dist/css/bootstrap.css";
import Options from "./components/options";
import { useState } from 'react'
import Logo from "./components/logo/index";
//import Card from "./components/card";

function App() {
  const [quote,setQuote]= useState(0)
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: quotes[quote].color,
        transition: 'all 0.7s ease-out'
      }}
    >
      <div className="row">
        <section className="col-3">
          <Options />
        </section>
      </div>
      
      <div className="mt-1 mb-1">
        <div className="root" id="quote-box card mb-2">
        <div className="row mt-2">
          <section className="col-md-12 d-flex d-flex justify-content-center text-center">
            <b>
              <h2 className="autor" id="autor" >
                {quotes[quote].titulo}
              </h2>
            </b>
          </section>
        </div>
  
        <div className="row">
          <div className="row mt-2 d-block col-12">
            <section className="col-md-12 text-center">
              <p id="text" style={{color :quotes[quote].color}}>
                Significado:
                <i className="fa fa-quote-left"> </i>
                {quotes[quote].quote}
                <i className="fa fa-quote-right"></i>
              </p>
            </section>
          </div>
        </div>
  
        <div className="row mt-2">
          <section className="col-12 d-flex d-flex justify-content-center">
            <button style={{color:'black',backgroundColor : quotes[quote].color,fontWeight: 500}}
              onClick={()=>setQuote(quote+1)}
              className="col-3 boton btn btn-success mb-2"
              id="Aprendida"
            >
              Aprendida
            </button>
          </section>
        </div>
      </div>
      </div>

        <Logo/>
        <Footer/>
    </div>
  );
}

export default App;
