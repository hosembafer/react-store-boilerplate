import React, { useState, useCallback } from 'react';

const Context = React.createContext();

let nextId = 0;

export const MessageProvider = ({children}) => {
    const [messages, setMessages] = useState([]);

    const removeMessage = useCallback(id => setMessages(messages => messages.filter(message => message.id !== id)), [setMessages]);

    const pushMessage = useCallback(({type, text}, lifetime = 4000) => {
        const id = ++nextId;
        setMessages(messages => [...messages, {id, type, text}]);
        if (lifetime) {
            setTimeout(() => removeMessage(id), lifetime);
        }
    }, [setMessages, removeMessage]);

    const value = {
        messages,

        pushMessage,
        removeMessage,
    };

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
};

export const useMessageStore = () => React.useContext(Context);
