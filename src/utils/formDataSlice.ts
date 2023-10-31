import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ActivityName, DateStatus, FormDataState, RootState } from './types';

const initialState: FormDataState = {
  id: '',
  dateTitle: '',
  dateMateName: '',
  dateTimeStart: '',
  dateTimeEnd: '',
  activityName: '',
  probability: 0,
  peachGuard: {
    name: '',
    phone: ''
  },
  status: ''
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: initialState,
  reducers: {
    setId: (state: FormDataState, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setDateTitle: (state: FormDataState, action: PayloadAction<string>) => {
      state.dateTitle = action.payload;
    },
    setDateMateName: (state: FormDataState, action: PayloadAction<string>) => {
      state.dateMateName = action.payload;
    },
    setActivityName: (state: FormDataState, action: PayloadAction<ActivityName>) => {
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
    setPeachGuardName: (state: FormDataState, action: PayloadAction<string>) => {
      state.peachGuard.name = action.payload;
    },
    setPeachGuardPhone: (state: FormDataState, action: PayloadAction<string>) => {
      state.peachGuard.phone = action.payload;
    },
    setDateStatus: (state: FormDataState, action: PayloadAction<DateStatus>) => {
      state.status = action.payload;
    },
  }
});

export const { 
    setId, setDateTitle, setDateMateName, setActivityName, setStartTime, 
    setEndTime, setProbability, setPeachGuardName, setPeachGuardPhone, setDateStatus 
} = formDataSlice.actions;

export const selectFormData = (state: RootState) => state.formData;

export default formDataSlice.reducer;
