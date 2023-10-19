import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormDataState, RootState } from './types';

const initialState: FormDataState = {
  dateTitle: '',
  dateMateName: '',
  dateTimeStart: null,
  dateTimeEnd: null,
  activityName: '',
  probability: 0,
  peachGuardName: '',
  peachGuardPhone: ''
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: initialState,
  reducers: {
    setDateTitle: (state: FormDataState, action: PayloadAction<string>) => {
      state.dateTitle = action.payload;
    },
    setDateMateName: (state: FormDataState, action: PayloadAction<string>) => {
      state.dateMateName = action.payload;
    },
    setActivityName: (state: FormDataState, action: PayloadAction<string>) => {
      state.activityName = action.payload;
    },
    setStartTime: (state: FormDataState, action: PayloadAction<string>) => {
      state.dateTimeStart = action.payload;
    },
    setEndTime: (state: FormDataState, action: PayloadAction<string>) => {
      state.dateTimeEnd = action.payload;
    },
    setProbability: (state: FormDataState, action: PayloadAction<number>) => {
      state.probability = action.payload;
    },
    setPeachGuard: (state: FormDataState, action: PayloadAction<string>) => {
      state.peachGuardName = action.payload;
    },
    setPeachGuardPhone: (state: FormDataState, action: PayloadAction<string>) => {
      state.peachGuardPhone = action.payload;
    },
  }
});

export const { setDateTitle, setDateMateName, setActivityName, setStartTime, setEndTime, setProbability, setPeachGuard, setPeachGuardPhone } = formDataSlice.actions;

export const selectFormData = (state: RootState) => state.formData;

export default formDataSlice.reducer;
