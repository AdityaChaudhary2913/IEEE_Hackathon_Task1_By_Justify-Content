import "./OffsetCard.css";
const OffsetCard = (props) => {
  return (
    <div className="OffsetCard">
      <img src={props.img} alt={props.title}></img>
      {/* <div className="CardContent"> */}
        <h1>{props.title}</h1>
        <h3>{props.price}</h3>
        <button>BUY</button>
      {/* </div> */}
    </div>
  );
};

export default OffsetCard;
