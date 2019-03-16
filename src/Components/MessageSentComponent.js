import React from 'react';
import { Image } from './UI';

const MessageSentComponent = () => (
    <div className="main-message-container">
        <div className="message message__sent">
            <span className="message__text">Hi how are you? Actually I was out for some day so thatswhy I couldn&apos;t reply. I hope you understand. Thanks</span>
            <span className="message__prop">
                <span className="message__prop--time">11:59 AM</span>
                <Image src="img/messageSeen.svg" alt="message seen||Delivered" />
            </span>
        </div>
    </div>
);

export default MessageSentComponent;

// TO BE DEFINED CLASSES IN BEM MANNER
