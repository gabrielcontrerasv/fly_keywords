import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../../data.json";

import Layout from "../../components/Layout";
import { CardsContainer, SearchContainer } from "./styles";

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
    <Layout>
      <div>
        <SearchContainer>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar informacion"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Buscar
            </button>
          </div>
        </SearchContainer>
        <CardsContainer>
          {quotes
            .filter((element) => element.force_id)
            .map((element, index) => {
              return (
                <div
                  className="card"
                  style={{ width: "18rem", borderRadius: ".5rem" }}
                  key={index}
                >
                  <img
                    src={element.image}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: ".5rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{element.name}</h5>
                  </div>
                </div>
              );
            })}
        </CardsContainer>
      </div>
    </Layout>
  );
}

export default Home;
