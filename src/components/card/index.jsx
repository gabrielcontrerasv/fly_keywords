import {quotes} from '../data/data'
import { useState } from 'react'

function Card() {
    const [quote,setQuote]= useState(0)
    return (
        <div className="mt-5">
        <div className="root" id="quote-box card">
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
          <div className="elem1 row mt-2 d-block col-12">
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
    )
  }
  
  export default Card




