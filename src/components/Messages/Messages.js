import React from 'react';

import './Messages.scss';
import { useMessageStore } from 'store/MessageStore';

const typeIcons = {
    success: '✔',
    info: '⚠',
    error: '💔',
};

const Messages = () => {
    const {
        messages,
        removeMessage,
    } = useMessageStore();

    return <div className={'Messages'}>
        {messages.map(message => {
            return <div className={`MessagesItem MessagesItem--${message.type}`} key={message.id}>
                <div className={'MessagesItem__type'}>{typeIcons[message.type]}</div>
                <div className={'MessagesItem__content'}>
                    {message.text}
                </div>
                <div className={'MessagesItem__remover'} onClick={() => removeMessage(message.id)}>⚰</div>
            </div>;
        })}
    </div>;
};

export default Messages;
