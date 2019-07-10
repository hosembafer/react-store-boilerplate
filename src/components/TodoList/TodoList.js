import React, { useRef, useEffect } from 'react';

import './TodoList.scss';

import { useTodoListStore } from 'store/TodoListStore.js';

const TodoList = () => {
	const addInputRef = useRef();

	const {
		tasks,
		
		addTask,
		renameTask,
		removeTask,
	} = useTodoListStore();

	useEffect(() => {
		addInputRef.current.value = '';
	}, [addInputRef, tasks.length]);

	return <div className={'TodoList'}>
		<div className={'TodoList__item'}>
			<div className={'TodoList__item__id'} />
			<input
				ref={addInputRef}
				placeholder={'Type new task and press Enter'}
				onKeyDown={event => event.key === 'Enter' && addTask(event.currentTarget.value)}
			/>
			<div className={'TodoList__item__remover'} />
		</div>
		
		<hr />
		
		{tasks && tasks.map(task => {
			return <div key={task.id} className={'TodoList__item'}>
				<div className={'TodoList__item__id'}>{task.id}</div>
				<input value={task.name} onChange={event => renameTask(task.id, event.currentTarget.value)} /> 
				<div className={'TodoList__item__remover'} onClick={() => removeTask(task.id)}>Delete</div>
			</div>;
		})}
	</div>;
};

export default TodoList;
