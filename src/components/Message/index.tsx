import React, { FC } from 'react';
import Greeting from '../../types/Greeting';
import './Message.scss';

export interface MessageProps {
  instanceId: string;
  greeting: Greeting;
  close: (instanceId: string) => void;
}

const Message: FC<MessageProps> = ({ instanceId, greeting, close }) => {
  return (
    <div className="message">
      <div className="messageText">
        <h4>To {greeting.recipient}</h4>
        <h4>{greeting.message}</h4>
        <h4>from {greeting.sender}</h4>
      </div>
      <div className="messageButtonContainer">
        <button onClick={() => close(instanceId)}>Close</button>
      </div>
    </div>
  );
};

export default Message;
