import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { SiSimpleanalytics } from "react-icons/si";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";
import { FaBullhorn } from "react-icons/fa6";
import ProtectedFacultyRoute from "../../Account/ProtectedFacultyRoute";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="ms-3" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <ProtectedFacultyRoute>
        <div className="d-flex">
          <div className="w-50 pe-1">
            <button className="btn btn-lg btn-secondary w-100 text-nowrap">
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
            </button>
          </div>
          <div className="w-50">
            <button className="btn btn-lg btn-success w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
            </button>
          </div>
        </div>
        <br />

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
        </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
        </button>
      </ProtectedFacultyRoute>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <RiHomeFill className="me-2 fs-5" /> Course Home Page{" "}
      </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" /> View Course Stream{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" /> New Analytics{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoNotificationsOutline className="me-2 fs-5" /> View Course
        Notifications{" "}
      </button>
      {/* Complete the rest of the buttons */}
      {/* completed */}
    </div>
  );
}
