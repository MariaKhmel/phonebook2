export const addTask = newTask => {
  return {
    type: "tasks/addTask",
    payload: newTask
  };
};

export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};