import React, { useRef, useEffect } from 'react';
import usePrevious from 'hooks/usePrevious';

import './TodoList.scss';

import { useTodoListStore } from 'store/TodoListStore';
import { useMessageStore } from 'store/MessageStore';

const TodoList = () => {
	const addInputRef = useRef();

	const {
		tasks,
		
		addTask,
		renameTask,
		removeTask,
	} = useTodoListStore();

	const {pushMessage} = useMessageStore();

	const prevTasks = usePrevious(tasks);

	useEffect(() => {
		if (prevTasks) {
			if (prevTasks.length < tasks.length) {
				pushMessage({type: 'success', text: 'New task added successfully!'});
			}
			if (prevTasks.length > tasks.length) {
				pushMessage({type: 'info', text: 'Task removed successfully!'});
			}
		}
		
		addInputRef.current.value = '';
	}, [addInputRef, tasks.length, pushMessage, prevTasks]);

	return <div className={'TodoList'}>
		<div className={'TodoList__item'}>
			<div className={'TodoList__item__id'} />
			<input ref={addInputRef} placeholder={'Type new task and press Enter'} onKeyDown={event => event.key === 'Enter' && addTask(event.currentTarget.value)}/>
			<div className={'TodoList__item__remover'} />
		</div><hr />
		
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
