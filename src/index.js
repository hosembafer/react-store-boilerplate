import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStoreProvider from 'store/createStoreProvider';
import { TodoListProvider } from 'store/TodoListStore';
import { MessageProvider } from 'store/MessageStore';


const StoreProvider = createStoreProvider([
    TodoListProvider,
    MessageProvider,
]);

// const SecondStoreProvider = createStoreProvider([
//     OrdersProvider,
// ]);

ReactDOM.render(<StoreProvider>
    <App />
</StoreProvider>, document.getElementById('root'));
