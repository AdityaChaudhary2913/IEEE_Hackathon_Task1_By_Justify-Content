const Calculate = () => {
  const formSubmitHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Electricity</label>
      <input placeholder="kWh" type="number"></input>
      <label>Natural Gas/LPG</label>
      <input placeholder="kWh" type="number"></input>
      <label>Petrol</label>
      <input placeholder="Litre"></input>
      <label>Diesel</label>
      <input placeholder="Litre"></input>
      <label>Supply of Water</label>
      <input placeholder="m3" type="number"></input>
      <label>Paper Waste</label>
      <input placeholder="kg" type="number"></input>
    </form>
  );
};
export default Calculate;
