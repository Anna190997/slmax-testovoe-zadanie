import React, { useState } from 'react';
import './App.scss';
import Title from '../Title/Title';
import Task from '../Task/Task';
import FormAdd from '../FormAdd/FormAdd';
import TASK from '../../constants';

const App = () => {
  const [task, setTask] = useState(TASK);
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');
  const [deleteTask, setDeleteTask] = useState(false);

  const handleChangeTitle = (valueTitle) => {
    setValueTitle(valueTitle);
  };

  const handleChangeDescription = (valueDescription) => {
    setValueDescription(valueDescription);
  };

  const addHandler = (event) => {
    event.preventDefault();
    setTask((task) => {
      return [
        {
          id: Math.random().toString(36).substring(7),
          taskDescription: valueDescription.slice(0, 20),
          taskTitle: valueTitle,
        },
        ...task,
      ];
    });
    setValueTitle('');
    setValueDescription('');
  };

  const deleteHandler = (id) => {
    setDeleteTask(true);

    setTimeout(function () {
      setTask((task) => {
        return task.filter((taskOfItems) => taskOfItems.id !== id);
      });
    }, 5000);
  };

  return (
    <div>
      <Title />
      <Task task={task} deleteHandler={deleteHandler} deleteTask={deleteTask} />
      <FormAdd
        valueDescription={valueDescription}
        valueTitle={valueTitle}
        onChangeTitle={handleChangeTitle}
        onChangeDescription={handleChangeDescription}
        addTask={addHandler}
      />
    </div>
  );
};

export default App;
