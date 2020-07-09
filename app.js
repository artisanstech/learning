const contractEventNotifier = (store) => (next) => (action) => {
  if (action.type === EventActions.EVENT_FIRED) {
    const contract = action.name;
    const contractEvent = action.event.event;
    const message = action.event.returnValues._message;
    const display = `${contract}(${contractEvent}): ${message}`;

    toast.success(display, { position: toast.POSITION.TOP_RIGHT });
  }
  return next(action);
};

const contractEventNotifier = (strore) => (next) => (action) => {
  if (action.type === EventActions.EVENT_FIRED) {
    const contract = action.name;
    const contractEvent = action.event.event;
    const message = action.event.returnValues._message;
    const display = `${contract}(${contractEvent}): ${message}`;

    toast.success(display, { position: toast.POSITION.TOP_RIGHT });
  }
  return next(action);
};
