import React from 'react';

import { useTodoListStore } from 'store/todoListStore.js';

const TodoList = () => {
	const {
		tasks,
		
		addTask,
		renameTask,
		removeTask,
	} = useTodoListStore();

	return <div className={'TodoList'}>
		<div className={'TodoListItem'}>
			<div className={'TodoListItem__id'} />
			<input
				placeholder={'Type new task and press Enter'}
				onKeyDown={event => event.key === 'Enter' && addTask(event.currentTarget.value)}
			/>
		</div>
		
		<hr />
		
		{tasks && tasks.map(task => {
			return <div key={task.id} className={'TodoListItem'}>
				<div className={'TodoListItem__id'}>{task.id}</div>
				<input value={task.name} onChange={event => renameTask(task.id, event.currentTarget.value)} /> 
				<div onClick={() => removeTask(task.id)}>Delete</div>
			</div>;
		})}
	</div>;
};

export default TodoList;
