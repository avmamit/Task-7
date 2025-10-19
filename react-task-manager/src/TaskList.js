import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
