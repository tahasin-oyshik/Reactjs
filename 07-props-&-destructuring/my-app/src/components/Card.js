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

// const {titleText, descText} = props; (object destructuring.)
// props.titleText is assigned to the variable titleText,
// and props.descText is assigned to the variable descText.

// const name = ["Dog", "Cat"];
// const [Dog, Cat] = name; (array destructuring.)
// name[0] is assigned to the variable Dog,
// and name[1] is assigned to the variable Cat.