import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, { payload }) {
      return (state = payload);
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
