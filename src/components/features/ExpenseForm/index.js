import React, { useState } from 'react';

const ExpenseForm = ({ getExpense }) => {
  // const [title, setTitle] = useState('');
  // const [cost, setCost] = useState('');
  // const [date, setDate] = useState('');

  const [expenseData, setExpenseData] = useState({
    title: '',
    cost: '',
    date: '',
  });

  const onChangeHandler = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });
  };

  // const onChangeTitleHandler = (e) => setTitle(e.target.value);
  // const onChangeCostHandler = (e) => setCost(e.target.value);
  // const onChangeDateHandler = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    // const data = {
    //   title,
    //   cost,
    //   date,
    // };
    getExpense(expenseData);
    setExpenseData({
      title: '',
      cost: '',
      date: '',
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      style={{
        border: '1px solid #333',
        margin: '1rem 0',
      }}
    >
      <div>
        <label htmlFor='title'>Title</label> <br />
        <input
          type='text'
          name='title'
          value={expenseData.title}
          placeholder='Expense title'
          id='title'
          onChange={onChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor='cost'>Cost</label> <br />
        <input
          type='number'
          name='cost'
          value={expenseData.cost}
          onChange={onChangeHandler}
          placeholder='Expense Price...'
          id='cost'
          required
        />
      </div>
      <div>
        <label htmlFor='date'>Date</label> <br />
        <input
          type='date'
          name='date'
          value={expenseData.date}
          onChange={onChangeHandler}
          id='date'
          required
        />
      </div>
      <button type='submit'>Add</button>
    </form>
  );
};

export default ExpenseForm;
