import { memo } from 'react';

const Message = ({ numberOfMessages }) => {
  console.log('message rendering');
  return <p>send {numberOfMessages} messages</p>;
};

export default memo(Message);
