import "./layout.css";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;