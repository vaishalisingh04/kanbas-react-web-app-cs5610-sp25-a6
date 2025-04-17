import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        enroll: (state, action) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: action.payload.userId,
                course: action.payload.courseId,
            };
            state.enrollments = [...state.enrollments, newEnrollment]
        },

        unenroll: (state, action) => {
            const newEnrollments = state.enrollments.filter((enrollment:any) => 
                (enrollment.user !== action.payload.userId || enrollment.course !== action.payload.courseId));
            state.enrollments = newEnrollments;
        }
  }});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;