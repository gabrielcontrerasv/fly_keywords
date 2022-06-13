import React, { useEffect, useContext, useState } from "react";

import Layout from "../../components/Layout";
import Search from "../../components/search";

import { ProviderContext } from "../../providers";

import {
  CardsContainer,
  Card,
  CardsHeader,
  CardFlagContainer,
  CardsBody,
  CardProfileContainer,
} from "./style";

function Home() {
  const [data, setData] = useState([]);

  const { instance } = useContext(ProviderContext);

  useEffect(() => {
    instance
      .get("data")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <Layout>
      <div className="container">
        <div className="Search">
          <Search />
        </div>
        <CardsContainer>
          {data.map((element, index) => {
            return (
              <Card className="card" key={index}>
                <CardsHeader background={element.color}>
                  <div>{element.force}</div>
                  <div>
                    <img
                      src={element.image}
                      className="card-img-top"
                      alt="..."
                      style={{ borderRadius: ".5rem" }}
                    />
                  </div>
                </CardsHeader>

                <CardsBody className="card-body">
                  <CardProfileContainer>
                    <img src={element.photo} alt="..." />
                  </CardProfileContainer>
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    <span>{element.sport.toUpperCase()}</span>
                  </p>
                  <CardFlagContainer>
                    <img src={element.flag_image} alt="..." />
                  </CardFlagContainer>
                  <p>
                    <span>Nacionalidad:</span> colombiano
                  </p>
                  <p>
                    <span>Nombre: </span> {element.name}
                  </p>
                  <p>
                    <span>Edad: </span> {element.birthday}
                  </p>
                  <p>
                    <span>Genero: </span> {element.sexo}
                  </p>
                  <p>
                    <span>Medallas de Oro </span> 2
                  </p>
                  <p>
                    <span>Medallas de Plata </span> 2
                  </p>
                  <p>
                    <span>Medallas de Bronce </span> 2
                  </p>
                </CardsBody>
              </Card>
            );
          })}
        </CardsContainer>
      </div>
    </Layout>
  );
}

export default Home;
