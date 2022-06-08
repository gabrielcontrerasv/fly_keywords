import data from "../../data.json";
import { CardsContainer} from "./style";

const Card = () => {
    
  return (
    <CardsContainer>
    {data
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
  );
};
export default Card;






