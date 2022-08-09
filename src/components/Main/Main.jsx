import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

const Main = () => {
  console.log(data);
  return (
    <div>
      <Card data={data} />
    </div>
  );
};

export default Main;
