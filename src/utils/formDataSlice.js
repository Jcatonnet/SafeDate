import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    dateTitle: '',
    dateMateName: ''
  },
  reducers: {
    setDateTitle: (state, action) => {
      state.dateTitle = action.payload;
    },
    setDateMateName: (state, action) => {
      state.dateMateName = action.payload;
    }
  }
});

export const { setDateTitle, setDateMateName } = formDataSlice.actions;

export const selectFormData = state => state.formData;

export default formDataSlice.reducer;
