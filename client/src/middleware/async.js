export default ({ dispatch }) => next => (action) => {
    // check if the action is a  not a promise
    if (!action.payload || !action.payload.then) {
      // pass the action to the next middleware
      return next(action);
    }

     // if in fact it's a promise, dispatch it's resolution
    action.payload.then((response) => {
      // create a new action with the resolution
      // overwriting the payload
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };