import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentReducer from "./reducer";
import assignmentReducer from "./Courses/Assignments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer, accountReducer, enrollmentReducer, assignmentReducer
  },
});
export default store;