import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 92.63,
      date: new Date(2022, 20, 10),
    },
    {
        id: 'e2',
        title: 'Rent',
        amount: 543.12,
        date: new Date(2022, 20, 10),
    },
    {
        id: 'e3',
        title: 'Pingo Doce',
        amount: 55.88,
        date: new Date(2022, 20, 10)
    },
    {
        id: 'e4',
        title: 'Internet',
        amount: 41.99,
        date: new Date(2022, 20, 10)
    },
  ]
  
  return (
    <div>
      <h2>Let's get stared!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
