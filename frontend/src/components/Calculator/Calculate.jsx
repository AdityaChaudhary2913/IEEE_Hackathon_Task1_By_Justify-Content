import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { manageCo2 } from "../../apiCalling/auth";
import AuthContext from "../../context/AuthContext";
const Calculate = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const InitialValues = {
    electricity: 0,
    diesel: 0,
    petrol: 0,
    water: 0,
    gas: 0,
    paper: 0,
    date: "",
  };
  const [values, setValues] = useState(InitialValues);
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    var emitted = 0.0;
    emitted +=
      values.electricity * 0.0023 +
      values.diesel * 0.0063 +
      values.petrol * 0.0072 +
      values.water * 0.001 * 0.149 +
      values.gas * 0.18316 +
      values.paper +
      1.04;
    // emittedCO2 = emittedCO2 / 1000;
    console.log(emitted);
    const date = values.date;
    const emittedCO2 = parseFloat(emitted);
    console.log(emittedCO2);
    const body = { emittedCO2, date };
    const response = await manageCo2("/auth/addCo2", body, token);
    if (!response) {
      console.log("Manage co2 frontend error");
    }
    navigate("/compare");
  };
  const formResetHandler = (event) => {
    event.preventDefault();
    setValues(InitialValues);
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Select Date</label>
      <input
        placeholder=""
        name="date"
        type="date"
        value={values.date}
        onChange={onChangeHandler}
      ></input>
      <label>Electricity (KWh)</label>
      <input
        placeholder="kWh"
        name="electricity"
        type="number"
        value={values.electricity}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Natural Gas/LPG (KWh)</label>
      <input
        placeholder="kWh"
        name="gas"
        type="number"
        value={values.gas}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Petrol (ltrs)</label>
      <input
        placeholder="Litre"
        name="petrol"
        type="number"
        value={values.petrol}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Diesel (ltrs)</label>
      <input
        placeholder="Litre"
        name="diesel"
        type="number"
        value={values.diesel}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Supply of Water (ltrs)</label>
      <input
        placeholder="m3"
        name="water"
        type="number"
        value={values.water}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Paper Waste (kgs)</label>
      <input
        placeholder="kg"
        name="paper"
        type="number"
        value={values.paper}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <button onClick={formSubmitHandler}>SUBMIT</button>
      <button onClick={formResetHandler}>RESET</button>
    </form>
  );
};
export default Calculate;
