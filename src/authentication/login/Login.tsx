// import { useState } from "react";
// import { useAuthStore } from "../../store/slices/AuthSlice";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "../../firebase/Firebase";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login, loading, error } = useAuthStore();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//     } catch (err) {}
//   };

//   const googleProvider = new GoogleAuthProvider();
//   async function singInWithGoogle() {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div style={{ maxWidth: 400, margin: "0 auto", padding: "2rem" }}>
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           style={{ display: "flex", gap: 5, padding: 2, cursor: "pointer" }}
//           onClick={() => singInWithGoogle()}
//           type="submit"
//           disabled={loading}
//         >
//           <img
//             style={{ maxWidth: 17 }}
//             src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
//             alt=""
//           />{" "}
//           {loading ? "Logging in..." : "Google"}
//         </button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
