import { useRef, useState } from "react";

const SimpleInput = (props) => {
  // With the ref we only access the DOM element once (when needed), instead of every time the component is rendered
  const nameInputRef = useRef();

  // We use the useState hook to keep track of the value of the input always
  const [enteredName, setEnteredName] = useState("");

  // We use the useState hook to keep track of the validity of the input
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  // We use the useState hook to keep track of the state of the validity
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // We check if the input has a valid input
    // It is necessary to check on the event.target.value because the value of the input is not updated yet on the state
    if (event.target.value.trim().length !== 0) {
      setEnteredNameIsValid(true);
    } else {
      setEnteredNameIsValid(false);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    // We check if the input is empty
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

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

  //
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // We use the css class needed for the validity of the input
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
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
