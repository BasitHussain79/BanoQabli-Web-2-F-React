import React from 'react';

const ExpenseForm = () => {
  return (
    <form>
      <input type='text' name='todoInput' placeholder='Add todo...' required />
      <button type='submit'>Add</button>
    </form>
  );
};

export default ExpenseForm;
