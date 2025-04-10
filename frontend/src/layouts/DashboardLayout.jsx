import useAuthStore from "../store/authStore";
import Navbar from "../components/Navbar/navbar";
import SideMenu from "../components/sidemenu/SideMenu";
import { Outlet } from "react-router-dom";
// import { useUserAuth } from "../hooks/useUserAuth";

const DashboardLayout = ({ activeMenu }) => {
  const user = useAuthStore(state => state.user);
  return (
    <div>
      <Navbar activeMenu={activeMenu} />
      {user && (
        <div className="flex">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>
          <div className="grow mx-5">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;