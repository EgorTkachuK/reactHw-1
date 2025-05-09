
import React from 'react';

const Message = ({name , text }) => {
  return (
    <div>
      <p>{name} : {text}</p>
    </div>
  );
};

export default Message
