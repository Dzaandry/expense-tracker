import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import React from "react";
import { useState } from "react";
import Wrapper from "./components/helpers/Wrapper";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = function (expenseData) {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };
  return (
    <Wrapper>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </Wrapper>
  );
}

export default App;
