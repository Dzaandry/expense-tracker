import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = function (props) {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = function () {
    setShowForm((prevState) => !prevState);
  };

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    setShowForm((prevState) => !prevState);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add expense</button>}
      {showForm && (
        <ExpenseForm
          onCancel={showFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
