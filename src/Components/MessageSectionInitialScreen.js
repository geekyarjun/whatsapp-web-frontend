import React from 'react';
import { Image, Text } from './UI';

const MessageSectionInitialScreen = () => (
    <div className="messages-section__initial-message">
        <Image src="img/initialwhatsappmessagelogo.jpg" alt="Whatsapp logo" className="messages-section__initial-message-logo" />
        <Text markup="h1">Keep your phone connected</Text>
        <Text>Whatsapp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</Text>
    </div>
);


export default MessageSectionInitialScreen;
