import Calculate from "./Calculate";
import footprint from "../Calculator/carbon-footprint.jpg";
import carbonFootprint from "../Calculator/flipped-carbon-footprint.jpg";
import footprintTrans from "../Calculator/carbon-footprint-trans.jpg";
import "./Calculator.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const Calculator = () => {
  const {token} = useContext(AuthContext)
  return (
    <div>
      {
        token ? (
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
        ) : (<p className="text-5xl w-full h-full m-auto text-neutral-500 text-center">Please Login first to see you details....</p>)
      }
    </div>
  );
};
export default Calculator;
