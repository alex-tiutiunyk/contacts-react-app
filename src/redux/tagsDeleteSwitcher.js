import { createSlice } from "@reduxjs/toolkit";

// isTagDel is false on Contacts page - disable delete tags
// isTagDel is true on Single page - enable delete tags
const tagsDeleteSwitcher = createSlice({
  name: 'tagsState',
  initialState: {
    isTagDel: false
  },
  reducers: {
    tagDelSwitch(state, action) {
      state.isTagDel = action.payload.newState
    },
  }
})

export const {tagDelSwitch} = tagsDeleteSwitcher.actions;

export default tagsDeleteSwitcher.reducer;