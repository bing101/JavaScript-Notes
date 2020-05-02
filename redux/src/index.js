import store from "./store";
import * as actions from "./actionsTypes";
import { bugAdded, resolveBug } from "./actions";
// Here we will make an interface for our redux api

// Subscribe method is called every time the state changes
const unsubscribe = store.subscribe(() => {
  console.log("State changed: ");
  console.log(store.getState());
});

// Dispatch an action
// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });

store.dispatch(bugAdded("Bug number 1"));

// Unsubscribe is used when we navigate to other page
// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//     description: "Resolved, bug 1",
//   },
// });

store.dispatch(resolveBug(1));
