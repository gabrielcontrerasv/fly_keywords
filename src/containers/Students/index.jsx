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
                <CardsHeader>
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
                    }}
                  >
                    {element.sport}
                  </p>
                  <p>Nacionalidad: colombiano</p>
                  <p>Nombre: alumno1</p>
                  Edad: 2000-01-01
                  <p>Genero: Masculino</p>
                  Medallas de Oro 2<p>Medallas de Plata 2</p>
                  <p>Medallas de Bronce 2</p>{" "}
                  <CardFlagContainer>
                    <img src={element.flag_image} alt="..." />
                  </CardFlagContainer>
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
