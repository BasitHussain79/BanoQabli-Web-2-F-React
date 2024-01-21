import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseLists = ({ expenses }) => {
  // props.expenses.forEach((data) => console.log(data.title));

  return (
    <ul>
      {expenses.map((d) => (
        <ExpenseItem title={d.title} date={d.date} cost={d.cost} />
      ))}
    </ul>
  );
};

export default ExpenseLists;
