import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function (props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);

  const resetStates = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsValidTitle(true);
    setIsValidAmount(true);
    setIsValidDate(true);
  };

  // One state instead of 3: (not as convenient imho)
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = function (event) {
    // use this for 1 state approach, and when your state update depends on the previous state:

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    if (event.target.value.trim().length > 0) {
      setIsValidTitle(true);
    }
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = function (event) {
    if (event.target.value) {
      setIsValidAmount(true);
    }
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = function (event) {
    if (event.target.value) {
      setIsValidDate(true);
    }
    setEnteredDate(event.target.value);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    if (!enteredTitle) {
      setIsValidTitle(false);
      return;
    }
    if (!enteredAmount) {
      setIsValidAmount(false);
      return;
    }
    if (!enteredDate) {
      setIsValidDate(false);
      return;
    }
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    resetStates();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${isValidTitle ? "" : "invalid"}`}
        >
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div
          className={`new-expense__control ${isValidAmount ? "" : "invalid"}`}
        >
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={`new-expense__control ${isValidDate ? "" : "invalid"}`}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
