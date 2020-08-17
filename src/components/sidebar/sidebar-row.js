import React from 'react';

function SideBarRow({ Icon, title }) {
  return (
    <div className="side__bar_row">
      <Icon className="row__icon" />
      <h2 className="row__title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
