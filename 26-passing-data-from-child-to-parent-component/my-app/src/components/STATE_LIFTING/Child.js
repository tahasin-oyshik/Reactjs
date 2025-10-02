const Child = (props) => {
  const childMessage = 'Hello from Child';
  props.onMessageSend(childMessage);

  return (
    <div>
      <p>I am child component</p>
      <p>{props.message}</p>
    </div>
  );
};

export default Child;
