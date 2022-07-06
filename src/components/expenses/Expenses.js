import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import React from "react";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const onPickYearHandler = function (selectedYear) {
    setYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +year
  );

  return (
    <React.Fragment>
      <Card className="expenses">
        <ExpenseFilter selected={year} onPickYear={onPickYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </React.Fragment>
  );
}

export default Expenses;
