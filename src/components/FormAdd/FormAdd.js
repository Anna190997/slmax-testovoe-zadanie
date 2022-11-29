import React from 'react';
import './FormAdd.scss';
import Icon from '../Icon/Icon';

const FormAdd = ({ onChangeTitle, onChangeDescription, valueTitle, valueDescription, addTask }) => {
  const handleChangeTitle = (event) => {
    onChangeTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    onChangeDescription(event.target.value);
  };
  return (
    <div className="items_wrapper_add">
      <form className="find_of_task_add">
        <input
          className="task_title"
          placeholder="Название"
          onChange={handleChangeTitle}
          value={valueTitle}
          maxLength='25'
        />
        <hr className="line_task_add" />
        <div>
          <input
            className="task_description"
            placeholder="Текст описание"
            onChange={handleChangeDescription}
            value={valueDescription}
          />
          <Icon idIcon="more_" iconClass="icon_more_add" clickIcon={addTask} />
        </div>
      </form>
    </div>
  );
};

export default FormAdd;
