import Header from './components/common/Header';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseLists from './components/features/ExpenseLists';
import Layout from './components/ui/Layout';
import './App.css';
import { useState } from 'react';
const arr = [
  {
    id: 1,
    title: 'Something Abc',
    cost: 87,
    date: '2023-08-21',
  },
  {
    id: 2,
    title: 'Something CDE',
    cost: 76,
    date: '2023-05-21',
  },
  {
    id: 3,
    title: 'Something ASD',
    cost: 765,
    date: '2022-01-08',
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(arr);
  const getExpenseData = (data) => {
    setExpenses([
      { id: Math.floor(Math.random() * 9999), ...data },
      ...expenses,
    ]);
  };

  return (
    <>
      <Header />
      <Layout>
        <h1>Add your expense!</h1>
        <ExpenseForm getExpense={getExpenseData} />
        <ExpenseLists expenses={expenses} />
      </Layout>
    </>
  );
};

export default App;
