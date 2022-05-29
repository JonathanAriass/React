# React

### Context
The context allows us to have access to some data or function pointers app-wide. We have to set a Context.Provider which will give the data to the Context.Consumer. Another way of doing this is to use the useContext() hook that React offer us. For example if you call useContext(AuthContext) you will have access to the data from login and logout:
```js
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // Dumy function for better IDE auto-completion
  onLogin: (email, password) => {},
});
```

This way wherever we need this states information we can call the AuthContext context component to retrieve that information. For example:
```js
import AuthContext from "../../store/auth-context";

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};
```

**NOTE**: important to import { useContext } from React and import the AuthContext in this example.

In the [useReducer project](https://github.com/JonathanAriass/React/tree/main/useReduce) you will find a bigger use of Context hook usage.

### Rules of Hooks
Hooks can only be called inside a React function component or a custom React Hook component, meaning that is has to be inside the declaration of the component.
