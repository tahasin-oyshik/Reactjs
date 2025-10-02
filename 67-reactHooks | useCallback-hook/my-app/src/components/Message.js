import { memo } from 'react';

const Message = ({ numberOfMessages, onHandleIncrement }) => {
  console.log('message rendering');
  return (
    <div>
      <p>send {numberOfMessages} messages</p>
      <button onClick={onHandleIncrement}>Increment Message Number</button>
    </div>
  );
};

export default memo(Message);
