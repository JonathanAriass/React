import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const newPasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // Needed API token from firebase console to use this endpoint
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=[APITOKEN]",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption: if the response is ok, then the password was updated
      console.log(res);
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
