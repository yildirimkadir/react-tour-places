import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      <Card data={data} />
    </div>
  );
};

export default Main;
