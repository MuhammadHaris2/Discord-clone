import { createSlice } from '@reduxjs/toolkit';

export const channelsSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName:null,

  },
  reducers: {
    setChannelInfo: (state,action) => {
      state.channelId=action.payload.channelId;
      state.channelName=action.payload.channelName;
    },
    
  },
});

export const { setChannelInfo } = channelsSlice.actions;
export const selectChannelId = state => state.app.channelId;
export const selectChannelName = state => state.app.channelName;
export default channelsSlice.reducer;
