import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // With the ref we only access the DOM element once (when needed), instead of every time the component is rendered
  const nameInputRef = useRef();

  // We use the useState hook to keep track of the value of the input always
  const [enteredName, setEnteredName] = useState("");

  // We use the useState hook to keep track of the validity of the input
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // We check if the input is empty
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value; // Pointer to the current input element
    console.log(enteredValue);

    // We can also access the DOM element directly
    //nameInputRef.current.value = ""; // Clear the input (not the ideal way to do it, cause we are changing the DOM directly)
    setEnteredName(""); // Reset the input value
  };

  // We use the css class needed for the validity of the input
  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
