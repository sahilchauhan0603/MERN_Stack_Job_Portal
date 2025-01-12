// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { clearAllUserErrors, login } from "../store/slices/userSlice";
// import { toast } from "react-toastify";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";

// const Login = () => {
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, isAuthenticated, error } = useSelector(
//     (state) => state.user
//   );

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("role", role);
//     formData.append("email", email);
//     formData.append("password", password);
//     dispatch(login(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, loading, isAuthenticated]);

//   return (
//     <>
//       <section className="authPage">
//         <div className="container login-container">
//           <div className="header">
//             <h3>Login to your account</h3>
//           </div>
//           <form onSubmit={handleLogin}>
//             <div className="inputTag">
//               <label>Login As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
//                   <option value="Employer">Login as an Employer</option>
//                   <option value="Job Seeker">Login as a Job Seeker</option>
//                 </select>
//                 <FaRegUser />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Email</label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="youremail@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <MdOutlineMailOutline />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" disabled={loading}>
//               Login
//             </button>
//             <Link to={"/register"}>Register Now</Link>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, login } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated]);

  return (
    <section className="authPage">
      <div className="container login-container">
        {/* Left Section: Login Form */}
        <div className="form-container">
          <div className="header">
            <h3>Login to your account</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Login as an Employer</option>
                  <option value="Job Seeker">Login as a Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email</label>
              <div>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" disabled={loading}>
              Login
            </button>
            <Link to={"/register"} className="register-link">
              Register Now
            </Link>
          </form>
        </div>

        {/* Right Section: Image
        <div className="image-container">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/027/488/large_2x/illustration-of-sign-in-page-login-website-page-and-form-people-with-smartphone-screen-vector.jpg" // Replace with your image URL
            alt="Login Illustration"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Login;
