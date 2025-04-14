import { FC, useEffect } from "react";
import { useAuthStore } from "../../store/slices/UseAuthSlice";
import Login from "../../authentication/Login";
import scss from "./AdminPage.module.scss";

const AdminPage: FC = () => {
  const { user, loading, initAuth, logout } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Login />;

  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}>
          Welcome, {user.email}
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
