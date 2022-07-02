import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500  mt-10 ml-5">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mt-16">
          <>
            <li>
              <Link to="/dashboard/order" className="text-purple-500 font-bold">
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/orderservice"
                className="text-purple-500 font-bold"
              >
                My Order
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/review"
                className="text-purple-500 font-bold"
              >
                Add Reviews
              </Link>
            </li>

            {admin && (
              <li>
                <Link
                  to="/dashboard/alluser"
                  className="text-purple-500 font-bold"
                >
                  All Users
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/dashboard/serviceList"
                className="text-purple-500 font-bold"
              >
                Service List
              </Link>
            </li>

            {admin && (
              <li>
                <Link
                  to="/dashboard/addnewitem"
                  className="text-purple-500 font-bold"
                >
                  Add A Product
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  to="/dashboard/allserviceList"
                  className="text-purple-500 font-bold"
                >
                  All Service List
                </Link>
              </li>
            )}
            {admin && (
              <li>
                <Link
                  to="/dashboard/admin"
                  className="font-bold text-purple-500 "
                >
                  Make Admin
                </Link>
              </li>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
