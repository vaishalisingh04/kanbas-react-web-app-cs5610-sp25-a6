import { Navigate, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import SignIn from "./Signin";
import Profile from "./Profile";
import SignUp from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <table>
      <tr>
        <td valign="top">
          <AccountNavigation />
        </td>
        <td valign="top">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={
                    currentUser
                      ? "/kambaz/Account/Profile"
                      : "/kambaz/Account/Signin"
                  }
                />
              }
            />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Signup" element={<SignUp />} />
          </Routes>
        </td>
      </tr>
    </table>
  );
}
