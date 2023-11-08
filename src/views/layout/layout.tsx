import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Outlet />
    </div>
  );
};

export default Layout;
