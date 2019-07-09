import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createStoreProvider from 'store/createStoreProvider';
import { todoListProvider } from 'store/todoListStore';


const StoreProvider = createStoreProvider([
    todoListProvider,
]);

// const SecondStoreProvider = createStoreProvider([
//     ordersProvider,
// ]);

ReactDOM.render(<StoreProvider>
    <App />
</StoreProvider>, document.getElementById('root'));

