import { useEffect } from "react";
import { useAuthStore } from "../../store/slices/AuthSlice";
import Login from "../../authentication/Login";

const SignPage = () => {
  const { user, loading, initAuth, logout } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Login />;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default SignPage;
