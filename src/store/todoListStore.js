import React, { useState, useCallback } from 'react';

const Context = React.createContext();

let nextId = 0;

export const TodoListProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(name => setTasks(tasks => ([...tasks, {id: ++nextId, name}])), [setTasks]);
    
    const renameTask = useCallback((id, name) => setTasks(tasks => tasks.map(task => ({
        ...task,
        name: id === task.id ? name : task.name,
    }))), [setTasks]);

    const removeTask = useCallback(id => setTasks(tasks => tasks.filter((task) => id !== task.id)), [setTasks]);

    const value = {
        tasks,

        addTask,
        renameTask,
        removeTask,
    };

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
};

export const useTodoListStore = () => React.useContext(Context);
