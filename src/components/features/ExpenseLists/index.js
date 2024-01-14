import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseLists = () => {
  return (
    <ul>
      <ExpenseItem title='Abc' date='2023-10-11' cost='98' />
      <ExpenseItem title='Abc1' date='2022-11-01' cost='998' />
      <ExpenseItem title='Abc2' date='2020-10-11' cost='756' />
    </ul>
  );
};

export default ExpenseLists;
