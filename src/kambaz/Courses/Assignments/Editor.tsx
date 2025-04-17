import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import * as assignmentClient from "./client";
import * as courseClient from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const isNewAssignment = aid === "New";
  const assignmentToEdit = isNewAssignment
    ? {}
    : assignments.find(
        (assignment: any) => assignment.course === cid && assignment._id === aid
      );
  const [title, setTitle] = useState(assignmentToEdit?.title || "");
  const [description, setDescription] = useState(
    assignmentToEdit?.description || ""
  );
  const [points, setPoints] = useState(assignmentToEdit?.points || 0);
  const [dueDate, setDueDate] = useState(
    formatDateForInput(assignmentToEdit?.due_date)
  );
  const [availableFrom, setAvailableFrom] = useState(
    formatDateForInput(assignmentToEdit?.available_date)
  );
  const [availableUntil, setAvailableUntil] = useState(
    formatDateForInput(assignmentToEdit?.available_until)
  );
  const handleSave = async () => {
    const newAssignment = {
      _id: isNewAssignment ? Date.now().toString() : aid,
      course: cid,
      title,
      description,
      points,
      due_date: dueDate,
      available_date: availableFrom,
      available_until: availableUntil,
    };
    console.log("is New value " + isNewAssignment);
    console.log("aid value " + aid);
    try {
      if (isNewAssignment) {
        // Create new assignment using client.ts
        console.log("inside if is new assign");
        const createdAssignment = await courseClient.createAssignmentForCourse(
          cid!,
          newAssignment
        );
        dispatch(addAssignment(createdAssignment)); // Dispatch Redux action to add assignment
      } else {
        // Update existing assignment using client.ts

        const updatedAssignment = await assignmentClient.updateAssignment(
          newAssignment
        );
        dispatch(updateAssignment(updatedAssignment)); // Dispatch Redux action to update assignment
      }
      navigate(`/kambaz/Courses/${cid}/Assignments`); // Navigate back to the assignments page
    } catch (error) {
      console.error("Error saving assignment:", error);
      navigate(`/kambaz/Courses/${cid}/Assignments`);
    }
  };

  function formatDateForInput(dateString: string | number | Date | undefined) {
    if (!dateString) return ""; // handle undefined dates
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // returns YYYY-MM-DD
  }
  return (
    <div
      id="wd-assignments-editor"
      className="container mt-5"
      style={{ maxWidth: "700px" }}
    >
      {/* Assignment Name */}
      <div className="form-group mb-3">
        <label htmlFor="wd-name" className="font-weight-bold">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Assignment Description */}
      <div className="form-group mb-3">
        <textarea
          id="wd-description"
          className="form-control"
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      {/* Points, Assignment Group, Display Grade as, and Submission Type */}
      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-points" className="font-weight-bold">
            Points
          </label>
        </div>
        <div className="col-md-6">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-assignment-group" className="font-weight-bold">
            Assignment Group
          </label>
        </div>
        <div className="col-md-6">
          <select id="wd-assignment-group" className="form-select">
            <option value="assignments">Assignments</option>
          </select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-display-grade-as" className="font-weight-bold">
            Display Grade as
          </label>
        </div>
        <div className="col-md-6">
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-3 d-flex align-items-center">
          <label htmlFor="wd-submission-type" className="font-weight-bold">
            Submission Type
          </label>
        </div>
        <div className="col-md-6 border p-2 ">
          <select id="wd-submission-type" className="form-select">
            <option value="online">Online</option>
          </select>
          <div className="row mb-2">
            <div className="form-group">
              <label className="font-weight-bold">Online Entry Options</label>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  className="form-check-input"
                  defaultChecked
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  id="wd-file-uploads"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-uploads" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Assign To, Due Date, Available From */}
      <div className="col-md-3 d-flex align-items-center">
        <label htmlFor="wd-submission-type" className="font-weight-bold">
          Assign
        </label>
      </div>
      <div className="container border p-2 w-50">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-assign-to" className="font-weight-bold">
              Assign To
            </label>
            <select id="wd-assign-to" className="form-select">
              <option value="everyone">Everyone</option>
            </select>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="wd-due-date" className="font-weight-bold">
                Due
              </label>
              <input
                id="wd-due-date"
                className="form-control w-100"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="wd-available-from" className="font-weight-bold">
              Available from
            </label>
            <input
              id="wd-available-from"
              className="form-control w-100"
              type="date"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="wd-available-until" className="font-weight-bold">
              Until
            </label>
            <input
              id="wd-available-until"
              className="form-control"
              type="date"
              value={availableUntil}
              onChange={(e) => setAvailableUntil(e.target.value)}
            />
          </div>
        </div>
      </div>
      <hr />
      {/* Cancel and Save buttons */}
      <div className="d-flex justify-content-end mt-4">
        {/* Cancel button navigates back to the assignments page for the current course */}
        <Link
          to={`/kambaz/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>

        {/* Save button navigates back to the assignments page for the current course */}
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
