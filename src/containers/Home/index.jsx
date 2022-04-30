import { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import Footer from "../../components/footer/footer";
import { quotes } from "../../components/data/data";
import Options from "../../components/options";
import Logo from "../../components/logo/index";
import { PageContainer, CarouselContainer, CarouselContent } from "./styles";

import logofac from "../../assets/imgs/logofac.png";

function Home() {
  const [quote, setQuote] = useState(0);
  return (
    <PageContainer>
      {/** 
      <div className="row">
        <section className="col-3">
          <Options />
        </section>
      </div>
       */}

      <div></div>
      <CarouselContainer>
        <Carousel>
          {[...quotes].map((quote, index) => {
            return (
              <CarouselContent>
                <div className="row mt-2">
                  <section className="col-md-12 d-flex d-flex justify-content-center text-center">
                    <b>
                      <h2 className="autor" id="autor">
                        {quote.titulo}
                      </h2>
                    </b>
                  </section>
                </div>

                <div className="row">
                  <div className="row mt-2 d-block col-12">
                    <section className="col-md-12 text-center">
                      <p id="text" style={{ color: quote.color }}>
                        Significado:
                        <i className="fa fa-quote-left"> </i>
                        {quote.quote}
                        <i className="fa fa-quote-right"></i>
                      </p>
                    </section>
                  </div>
                </div>

                <div className="row mt-2">
                  <section className="col-12 d-flex d-flex justify-content-center">
                    <button
                      style={{
                        color: "black",
                        backgroundColor: quote.color,
                        fontWeight: 500,
                      }}
                      onClick={() =>
                        setQuote(quotes.length - 1 > quote ? quote + 1 : 0)
                      }
                      className="col-3 boton btn btn-success mb-2"
                      id="Aprendida"
                    >
                      Aprendida
                    </button>
                  </section>
                </div>
              </CarouselContent>
            );
          })}
        </Carousel>
      </CarouselContainer>

      {/** 
      <Logo />
      <Footer />
      */}
    </PageContainer>
  );
}

export default Home;
