import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../../data.json";

import Footer from "../../components/footer/footer";
import Options from "../../components/options";
import Logo from "../../components/logo/index";
import { PageContainer, CardsContainer, SearchContainer } from "./styles";

import logofac from "../../assets/imgs/logofac.png";
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
      <div>
        <SearchContainer>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Escriba su palabra"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Buscar
            </button>
          </div>
        </SearchContainer>
        <CardsContainer>
          {quotes.map((element, index) => {
            return (
              <div
                className="card"
                style={{ width: "18rem", borderRadius: ".5rem" }}
                key={index}
              >
                <img
                  src={logofac}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: ".5rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{element.word}</h5>
                  {/*<p className="card-text">{element.signification}</p>*/}
                </div>
              </div>
            );
          })}
        </CardsContainer>
      </div>
    </PageContainer>
  );
}

export default Home;
