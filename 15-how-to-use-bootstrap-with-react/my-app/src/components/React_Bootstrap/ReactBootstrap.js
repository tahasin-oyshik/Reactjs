// For Button Go -> https://react-bootstrap.netlify.app/docs/getting-started/introduction

// Importing the Button & Card component from the react-bootstrap library
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim neque dolorum
          exercitationem, veritatis veniam quidem officiis aperiam illo accusantium. Nemo eius alias
          ad officiis.
        </Card.Text>
        <Button>Learn more</Button>
      </Card.Body>
    </Card>
  );
};

export default ReactBootstrap;
