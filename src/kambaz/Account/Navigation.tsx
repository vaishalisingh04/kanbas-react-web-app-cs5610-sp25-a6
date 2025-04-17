import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser
    ? [{ label: "Profile", path: "/kambaz/Account/Profile" }]
    : [
        { label: "Signin", path: "/kambaz/Account/Signin" },
        { label: "Signup", path: "/kambaz/Account/Signup" },
      ];
  const { pathname } = useLocation();

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-4 rounded-0 d-none d-sm-block"
    >
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={`list-group-item ${
            pathname.includes(link.label) ? "active" : "text-danger"
          } border border-0`}
        >
          {" "}
          {link.label}{" "}
        </Link>
      ))}
    </div>
  );
}
