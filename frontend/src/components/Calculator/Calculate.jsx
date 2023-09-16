import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Calculate = () => {
  const navigate = useNavigate();
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
  const formSubmitHandler = (event) => {
    event.preventDefault();
    var EmittedCO2 = 0;
    EmittedCO2 +=
      values.electricity * 0.0023 +
      values.diesel * 0.0063 +
      values.petrol * 0.0072 +
      values.water * 0.001 * 0.149 +
      values.gas * 0.18316 +
      values.paper +
      1.04;
    EmittedCO2 = EmittedCO2 / 1000;
    console.log(EmittedCO2);
    console.log(values.date);
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
      <label>Electricity</label>
      <input
        placeholder="kWh"
        name="electricity"
        type="number"
        value={values.electricity}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Natural Gas/LPG</label>
      <input
        placeholder="kWh"
        name="gas"
        type="number"
        value={values.gas}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Petrol</label>
      <input
        placeholder="Litre"
        name="petrol"
        type="number"
        value={values.petrol}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Diesel</label>
      <input
        placeholder="Litre"
        name="diesel"
        type="number"
        value={values.diesel}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Supply of Water</label>
      <input
        placeholder="m3"
        name="water"
        type="number"
        value={values.water}
        onChange={onChangeHandler}
        min={0}
      ></input>
      <label>Paper Waste</label>
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
