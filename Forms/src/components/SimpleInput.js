import { useState } from "react";

const SimpleInput = (props) => {
  // We use the useState hook to keep track of the value of the input always
  const [enteredName, setEnteredName] = useState("");

  // We use the useState hook to keep track of the state of the validity
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // We save some code by using a constant instead of a state
  const enteredNameIsValid = enteredName.trim() !== "";

  // We save some code by using a constant instead of a state
  const enteredEmailIsValid = enteredEmail.includes("@");

  let formIsValid = false;

  // We can check for all the validity of the form if we want (example: several inputs)
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    // We check if the input is empty
    if (!enteredNameIsValid) {
      return;
    }

    // We can also access the DOM element directly
    //nameInputRef.current.value = ""; // Clear the input (not the ideal way to do it, cause we are changing the DOM directly)
    setEnteredName(""); // Reset the name input value
    setEnteredEmail(""); // Reset the email input value
    setEnteredNameTouched(false); // Reset the name input state
    setEnteredEmailTouched(false); // Reset the email input state
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // We use the css class needed for the validity of the input
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
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
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
