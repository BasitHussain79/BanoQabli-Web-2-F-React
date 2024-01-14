import React from 'react';

const ExpenseItem = ({ date, title, cost }) => {
  return (
    <li>
      <div>
        <p>day</p>
        <p>month</p>
        <p>year</p>
      </div>

      <h3>{title}</h3>

      <p>${cost}</p>

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
