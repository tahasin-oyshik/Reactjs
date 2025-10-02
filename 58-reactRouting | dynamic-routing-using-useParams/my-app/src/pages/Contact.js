import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ullam velit porro,
        dignissimos voluptatum error ad perferendis? Eaque mollitia eius qui quam, consequuntur
        repellendus minus quas enim quisquam provident, officiis sequi pariatur earum illum, tempore
        nesciunt fugit. Vel ab modi deserunt repellat nostrum, exercitationem aliquid, voluptas
        minus, ipsam facilis id.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi tenetur maxime nam, sapiente
        alias commodi consequatur recusandae labore vitae id, nesciunt enim assumenda facilis
        doloremque necessitatibus. Veniam maxime quas nesciunt?
      </p>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home page
      </button>
    </div>
  );
};

export default Contact;
