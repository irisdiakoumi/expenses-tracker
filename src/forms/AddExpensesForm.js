import React, {useState} from 'react';

const AddExpensesForm = (props) => {
  const initialFormState = {id: null, type: '', amount: ''};
  const [expense, setExpense] = useState(initialFormState);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setExpense({...expense, [name]: value});
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //prevents default form submission
        if (!expense.type || !expense.amount) return; //validation no empty values allowed

        props.addExpense(expense); //pass input to expenses state
        setExpense(initialFormState); //reset the form to initial value
      }}>
      <label>Date</label>
      <input
        onChange={handleInputChange}
        type="date"
        name="date"
        value={expense.date}
      />
      <label>Type</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="type"
        value={expense.type}
      />
      <label>Amount</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="amount"
        value={expense.amount}
      />
      <button>Add new expense</button>
    </form>
  );
};

export default AddExpensesForm;
