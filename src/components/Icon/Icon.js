import React from 'react';

const Icon = ({ iconClass, clickIcon, idIcon }) => {
  return (
    <>
      <svg className={iconClass} onClick={clickIcon}>
        <use xlinkHref={`/images/svg/sprite.svg#${idIcon}`} />
      </svg>
    </>
  );
};

export default Icon;
