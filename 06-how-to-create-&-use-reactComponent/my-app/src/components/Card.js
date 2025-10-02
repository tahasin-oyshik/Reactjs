const todoTitle = "Call Familty";
const todoDesc = "kkdsfl sflsjf sjlfjs e9wjej lsdjfj boby approved";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear(); 

const Card = () => {
  return (
    <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>   
      <p className="cardDesc">{todoDesc}</p> 
      <p className="cardFooter">{`${dateName}/${monthName}/${currentYear}`}</p> 
    </div>
  );
};      

export default Card;    