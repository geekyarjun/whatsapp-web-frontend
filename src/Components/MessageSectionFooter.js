import React from 'react';
import { Image, Input } from './UI';

const MessageSectionFooter = () => (
    <div className="messages-section-container__footer">
        <Image src="img/emoji.svg" alt="emoji icon" />
        <Input type="text" placeholder="Type a message" />
        <Image src="img/mic.svg" alt="mic icon" />
    </div>
);

export default MessageSectionFooter;
