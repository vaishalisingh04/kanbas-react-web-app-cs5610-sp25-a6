import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { pathname } = useLocation();
  const { cid } = useParams();
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-sm-block"
    >
      {links.map((link) => (
        <Link
          to={`/kambaz/Courses/${cid}/${link}`}
          id="wd-course-home-link"
          className={`list-group-item ${
            pathname.includes(link) ? "active" : "text-danger"
          } border border-0`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}
    </div>
  );
}
