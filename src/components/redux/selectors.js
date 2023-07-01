const getContacts = state => state.contacts;
const getFilter = state => state.filter;
const getName = state => state.name;
const getNumber = state => state.number;

const selectors = { getContacts, getFilter, getName, getNumber };

export default selectors
