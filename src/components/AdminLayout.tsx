import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div
      style={{
        padding: "10px",
        height: "100vh",
        backgroundColor: "red",
        color: "white",
      }}
    >
      <h1>Admin Layout</h1>
      <nav>
        <Link to="users">Users</Link>
      </nav>
      <Outlet />
      {/* dinamik içerik */}
      {/* admin sayfaları ise bu layout üzerinden açılacak */}
    </div>
  );
}
