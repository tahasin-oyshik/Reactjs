const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear();

const Card = (props) => {
  const {titleText, descText} = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{titleText}</h3>
      <p className="cardDesc">{descText}</p>
      <p className="cardFooter">{`${dateName}/${monthName}/${currentYear}`}</p>
    </div>
  );
};

export default Card;
