import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../../data.json";

import { PageContainer, CarouselContainer, CarouselContent } from "./styles";

import Navbar from "../../components/Nabvar";

const colors = [
  "#3346FF",
  "#33FFB5",
  "#DE1127",
  "#11DEB5",
  "#3346FF",
  "#33FFB5",
  "#DE1127",
];

function Home() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    let finalData = [...Array(10).keys()].map((element, index) => {
      const random = Math.floor(Math.random() * data.length);
      return { ...data[random], color: colors[index] };
    });

    setQuotes([...finalData]);
  }, []);
  return (
    <PageContainer>
      <Navbar />

      {[0, 1, 2].map((element) => {
        return (
          <CarouselContainer>
            <Carousel autoPlay infiniteLoop interval={3000}>
              {[...quotes].map((quote, index) => {
                return (
                  <CarouselContent key={index}>
                    <div className="row mt-2">
                      <section className="col-md-12 d-flex d-flex justify-content-center text-center">
                        <b>
                          <h2 className="autor" id="autor">
                            {quote.word}
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
                            {quote.signification}
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
        );
      })}

      {/** 
      <Logo />
      <Footer />
      */}
    </PageContainer>
  );
}

export default Home;
