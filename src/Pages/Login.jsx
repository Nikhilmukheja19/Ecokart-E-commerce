import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUserShield } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginresponse = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      if (loginresponse) {
        console.log(loginresponse)
        localStorage.setItem("token", loginresponse.data.token);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // hide loader
    }
  };
  if (loading) return <Loader />;

  return (
    <div className="mt-20 flex items-center justify-center ">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/80 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-Black-100"
      >
        <div className="text-center mb-6">
          <FaUserShield className="text-Black-600 text-5xl mx-auto mb-2" />
          <h2 className="text-3xl font-extrabold text-Black-700"> Login</h2>
          <p className="text-gray-600 text-sm">Secure access panel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Black-500"
          />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Black-500"
          />
          <button
            type="submit"
            className="w-full bg-white-600 text-black py-2 rounded-md font-semibold hover:bg-white-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-gray-400 text-center mt-4">
          Already have an account?{" "}
          <span className="text-Black-500">
            <Link to="/signup">Signup</Link>
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login
