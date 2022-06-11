import { useState, useEffect, useContext } from "react";
import { Carousel } from "react-responsive-carousel";

import Layout from "../../components/Layout";
import { CarouselContainer, CarouselContent, HomeContent } from "./styles";
import data from "../../data.json";

import { ProviderContext } from "../../providers";

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
  const { instance } = useContext(ProviderContext);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    let finalData = [...Array(3).keys()].map((element, index) => {
      const random = Math.floor(Math.random() * data.length);
      return { ...data[random], color: colors[index] };
    });

    setQuotes([...finalData]);

    instance
      .get("user")
      .then((response) => {
        console.log(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <Layout title={"HOME"}>
      {[0, 1, 2].map((element, index) => {
        return (
          <CarouselContainer key={index}>
            <Carousel autoPlay infiniteLoop interval={3000}>
              {[...quotes].map((quote, index) => {
                return (
                  <CarouselContent key={index}>
                    <div className="row mt-2">
                      <section className="col-md-12 d-flex d-flex justify-content-center text-center">
                        <b>
                          <img src={quote.image} />
                        </b>
                      </section>
                    </div>

                    <div className="row">
                      <div className="row mt-2 d-block col-12">
                        <section className="col-md-12 text-center">
                          <p id="text" style={{ color: quote.color }}>
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
                          className="col-3 boton btn btn-success mb-4"
                          id="detalles"
                        >
                          VER
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
    </Layout>
  );
}

export default Home;
