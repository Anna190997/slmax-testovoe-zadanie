import React from 'react';
import TaskItems from '../TaskItems/TaskItems';

const Task = ({ task, deleteHandler, deleteTask, notDelete }) => {
  return (
    <div>
      {task.map((item) => (
        <TaskItems
          item={item}
          key={item.id}
          deleteHandler={deleteHandler}
          deleteTask={deleteTask}
          notDelete={notDelete}
        />
      ))}
    </div>
  );
};

export default Task;
