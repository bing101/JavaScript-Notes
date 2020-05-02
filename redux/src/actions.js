// Defining the various actions to a block of code

import * as actions from "./actionsTypes";
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

export const resolveBug = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: id,
    description: "Resolved bug",
  },
});
