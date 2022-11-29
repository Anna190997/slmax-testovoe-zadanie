import React, { useEffect, useState } from 'react';
import './TaskItems.scss';
import Icon from '../Icon/Icon';

const TaskItems = ({
  item: { id, taskTitle, taskDescription },
  deleteHandler,
  deleteTask,
  notDelete,
}) => {
  const [taskDetail, setTaskDetail] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [timeLeft, setTimeLeft] = useState(9);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
  }, []);

  const moreTaskDescription = () => {
    setTaskDetail(true);
  };

  const lessTaskDescription = () => {
    setTaskDetail(false);
  };

  const removeShow = () => {
    setMouse(true);
  };

  function formatDate(date) {
    let day = date.getDate();
    if (day < 10) day = '0' + day;

    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;

    let year = date.getFullYear() % 100;
    if (year < 10) year = '0' + year;

    return day + '.' + month + '.' + year;
  }

  const date = new Date();
  localStorage.setItem('task', formatDate(date));

  return (
    <div>
      <div className="items_wrapper">
        <div className="find_of_task">
          <p className="task_title">{taskTitle}</p>
          <hr className="line_task" />
          <p className="task_description" onMouseOver={() => removeShow()}>
            {taskDescription.slice(0, 20)}
          </p>

          {mouse ? (
            <>
              {deleteTask ? (
                <button className="remove_button" onClick={notDelete}>
                  {seconds}
                </button>
              ) : (
                <button className="remove_button" onClick={() => deleteHandler(id)}>
                  Удалить
                </button>
              )}
            </>
          ) : (
            <>
              {!taskDetail ? (
                <Icon
                  idIcon="more_"
                  iconClass="icon_more"
                  clickIcon={() => moreTaskDescription()}
                />
              ) : (
                <Icon
                  idIcon="more_"
                  iconClass="icon_less"
                  clickIcon={() => lessTaskDescription()}
                />
              )}
            </>
          )}
        </div>
        {taskDetail && (
          <>
            <p className="date">{formatDate(date)}</p>
            <ul className="more_task">{taskDescription}</ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItems;
