import React from 'react';

function Filter({ onFilter }) {
  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="pending">Pending</option>
      <option value="completed">Completed</option>
    </select>
  );
}

export default Filter;
