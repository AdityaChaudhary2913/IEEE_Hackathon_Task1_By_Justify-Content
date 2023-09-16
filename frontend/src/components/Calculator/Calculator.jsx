import Calculate from "./Calculate";
import footprint from "../Calculator/carbon-footprint.jpg";
import carbonFootprint from "../Calculator/flipped-carbon-footprint.jpg";
import footprintTrans from "../Calculator/carbon-footprint-trans.jpg";
import "./Calculator.css";
const Calculator = () => {
  return (
    <div className="Calculator">
      <h1>CARBON FOOTPRINT CALCULATOR</h1>
      <div className="CalForm">
        <img
          src={footprintTrans}
          alt="Carbon-transparent"
          className="TransparentFootprint"
        ></img>
        <img
          src={carbonFootprint}
          alt="Carbon-Footprint"
          className="FootprintImg"
        ></img>
        <Calculate />
        <img
          src={footprint}
          alt="Carbon-Footprint"
          className="FootprintImg"
        ></img>
      </div>
    </div>
  );
};
export default Calculator;
