import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
