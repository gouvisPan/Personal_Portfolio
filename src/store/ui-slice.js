import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    headerInView: true,
    projectsInView: false,
    aboutInView: false,
    contactInView: false,
  },
  reducers: {
    toggleHeader(state, action) {
      state.headerInView = action.payload;
    },
    toggleProjects(state, action) {
      state.projectsInView = action.payload;
    },
    toggleAbout(state, action) {
      state.aboutInView = action.payload;
    },
    toggleContact(state, action) {
      state.contactInView = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
