export const setContacts = contacts => {
  return {
    type: "contacts/setContacts",
    payload: contacts
  };
};

export const setFiltersetFilter = taskId => {
  return {
    type: "filter/setFilter",
    payload: taskId,
  };
};