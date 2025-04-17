import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function KambazNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = [
    { label: "Dashboard", path: "/kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/kambaz/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/kambaz/Calendar", icon: FaRegCalendarAlt },
    { label: "Inbox", path: "/kambaz/Inbox", icon: IoMailOpenOutline },
    { label: "Labs", path: "/Labs", icon: BsPersonWorkspace },
  ];
  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 115 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>

      <Link
        to={currentUser ? "/kambaz/Account/Profile" : "/kambaz/Account/Signin"}
        className={`list-group-item text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
