import { createAction, nanoid } from '@reduxjs/toolkit';

const addContact = createAction(
  'contacts/addContact',
  ({ nameinput, numberinput }) => {
    return {
      payload: {
        id: nanoid(),
        name: nameinput,
        number: numberinput,
      },
    };
  },
); // można dodać funkcję tworzącą id

const filterContact = createAction('contacts/filterContact'); //TODO czy to powinno być do filter czy do contacts?

const deleteContact = createAction('contacts/deleteContact')

const setName = createAction('name/setName')

const setNumber = createAction('number/setNumber')

const resetName = createAction('name/resetName')

const resetNumber = createAction('number/resetNumber')

const actions = { addContact, filterContact, deleteContact, setName, setNumber, resetName, resetNumber };

export default actions;
