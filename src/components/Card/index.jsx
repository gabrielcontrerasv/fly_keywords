import data from "../../data.json";
import { CardsContainer, Card } from "./style";

const Cards = () => {
  return (
    <CardsContainer>
      {data
        .filter((element) => element.force_id)
        .map((element, index) => {
          return (
            <Card className="card" key={index}>
              <img
                src={element.image}
                className="card-img-top"
                alt="..."
                style={{ borderRadius: ".5rem" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{element.name}</h5>
              </div>
            </Card>
          );
        })}
    </CardsContainer>
  );
};
export default Cards;
