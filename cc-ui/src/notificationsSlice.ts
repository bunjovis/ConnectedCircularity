import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notification: {},
  },
  reducers: {
    newNotification: (state, action) => {
      state.notification = {
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    clearNotification: (state) => {
      state.notification = {};
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
