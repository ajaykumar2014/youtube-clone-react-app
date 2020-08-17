import React from 'react';

function SideBarRow({ Icon, title, color, toggle = false }) {
  return (
    <div className={toggle ? 'side__bar col' : 'side__bar row'}>
      <Icon className="row__icon" color={color} />

      <span className="row__title">{title}</span>
    </div>
  );
}

export default SideBarRow;
