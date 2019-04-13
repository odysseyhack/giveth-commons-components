# Using State and Context

We manage state using the [Context Apps](FILL) and [Hooks](fill).

The high level steps are:

1. Define your state file that exports - initialState, actions and reducer. See userState.js for an example.
2. Create a context file that consumes the state
    * Bring in a context using the [useContext]() hook. 
        * ```const UserContext = React.createContext();```
    * Bring in the reducer and initialState from the state file
        *  ```const [state, dispatch] = React.useReducer(reducer, initialState);```
    * Export a component that instantiates a Provider for the Context and injects in state and dispatch in as value
3. Add this component to the state/StateWrapper.js component. Be careful to nest state appropriately

Once you have set this up for a particular state object you can then consume the Context in any component that is wrapped by the state. For applications we are calling this CommonsStateWrapper. See examples/UserComponent.js for an example of how to do this.
