import { useState, useRef } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function (props) {
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidAmount, setIsValidAmount] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);
  const titleRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const resetStates = () => {
    titleRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
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
    if (event.target.value.trim().length > 0) setIsValidTitle(true);
  };
  const amountChangeHandler = function (event) {
    if (event.target.value) setIsValidAmount(true);
  };
  const dateChangeHandler = function (event) {
    if (event.target.value) setIsValidDate(true);
  };
  const submitHandler = function (e) {
    e.preventDefault();
    if (!titleRef.current.value) {
      setIsValidTitle(false);
      titleRef.current.focus();
      return;
    }
    if (!amountRef.current.value) {
      setIsValidAmount(false);
      amountRef.current.focus();
      return;
    }
    if (!dateRef.current.value) {
      dateRef.current.focus();
      setIsValidDate(false);
      return;
    }
    const expenseData = {
      title: titleRef.current.value,
      amount: +amountRef.current.value,
      date: new Date(dateRef.current.value),
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
          <input ref={titleRef} type="text" onChange={titleChangeHandler} />
        </div>
        <div
          className={`new-expense__control ${isValidAmount ? "" : "invalid"}`}
        >
          <label>Amount</label>
          <input
            ref={amountRef}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className={`new-expense__control ${isValidDate ? "" : "invalid"}`}>
          <label>Date</label>
          <input
            ref={dateRef}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
