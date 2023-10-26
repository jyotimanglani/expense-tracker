import React from "react";
import NewExpense from "./components/NewExpense";

import Expenses from "./components/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 7, 28),
  },
];

function App() {
  
  const[expenses, setExpenses] = React.useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
   setExpenses((prevState) => {
    return [expense, ...prevState];
   });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
