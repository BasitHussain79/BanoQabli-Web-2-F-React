import Header from './components/common/Header';
import ExpenseForm from './components/features/ExpenseForm';
import ExpenseLists from './components/features/ExpenseLists';
import './App.css';

const App = () => {
  const arr = [
    {
      title: 'Something Abc',
      cost: 87,
      date: '2023-08-21',
    },
    {
      title: 'Something CDE',
      cost: 76,
      date: '2023-05-21',
    },
    {
      title: 'Something ASD',
      cost: 765,
      date: '2022-01-08',
    },
  ];
  return (
    <>
      <Header />
      <ExpenseForm />
      <ExpenseLists />
    </>
  );
};

export default App;
