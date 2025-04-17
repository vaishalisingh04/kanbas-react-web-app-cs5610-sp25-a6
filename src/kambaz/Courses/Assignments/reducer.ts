import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const enrollmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignment: (state, action) => {
            state.assignments = action.payload;
          },
        addAssignment: (state, action) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: action.payload.title,
                course: action.payload.courseId,
                points: action.payload.points,
                dueDate: action.payload.dueDate, 
                availableDate: action.payload.availableDate,
            };
            state.assignments.push(newAssignment);
        },

        deleteAssignment: (state, action) => {
            // Filter out the assignment with the given ID
            console.log("id for delete in reducer" + action.payload._id);
            state.assignments = state.assignments.filter(
                (assignment: any) => assignment._id !== action.payload._id
            );
        },

        updateAssignment: (state, action) => {
            // Map through the assignments and update the matching assignment
            const updatedAssignment: any = {
                _id: action.payload._id,
                title: action.payload.title,
                course: action.payload.courseId,
                points: action.payload.points,
                dueDate: action.payload.dueDate, 
                availableDate: action.payload.availableDate,
            };
            state.assignments = state.assignments.map((assignment: any) =>
                assignment._id === action.payload._id ? updatedAssignment : assignment);
        }
    }
});

// Export actions and reducer
export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;