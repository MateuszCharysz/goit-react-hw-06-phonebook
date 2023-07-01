import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = ''


const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      console.log(state);
      console.log(action)
      state.concat('', action.payload)
    },
  },
});

export const {setFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer