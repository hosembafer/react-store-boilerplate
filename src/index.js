import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStoreProvider from 'store/createStoreProvider';
import { TodoListProvider } from 'store/TodoListStore';


const StoreProvider = createStoreProvider([
    TodoListProvider,
]);

// const SecondStoreProvider = createStoreProvider([
//     ordersProvider,
// ]);

ReactDOM.render(<StoreProvider>
    <App />
</StoreProvider>, document.getElementById('root'));

