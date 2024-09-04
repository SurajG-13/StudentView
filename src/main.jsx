import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./assets/Layout.jsx";
import Home from "./assets/components/Home/Home.jsx";
import About from "./assets/components/About/About.jsx";
import SignIn from "./assets/components/SignIn/SignIn.jsx";
import GetStarted from "./assets/components/SignIn/GetStarted.jsx";
import Extra from "../src/assets/Extra.jsx";
import StudentLogIn from "./assets/components/SignIn/StudentLogIn.jsx";
import TeacherLogIn from "./assets/components/SignIn/TeacherLogIn.jsx";

// Student Interface Imports :

import S_Home from "./assets/components/Student/HomePage/S_Home.jsx";
import S_Profile from "./assets/components/Student/Profile/S_Profile.jsx";
import S_Academics from "./assets/components/Student/Academics/S_Academics.jsx";
import Sem1 from "./assets/components/Student/Academics/Sem1.jsx";

// Teacher Interface Imports :

import T_Home from "./assets/components/Teacher/HomePage/T_Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="getstarted" element={<GetStarted />} />
      <Route path="extra" element={<Extra />} />
      <Route path="studentlogin" element={<StudentLogIn />} />
      <Route path="teacherlogin" element={<TeacherLogIn />} />

      {/* Student  Interface Route */}

      <Route path="s_home" element={<S_Home />} />
      <Route path="s_basicdetails" element={<S_Profile />} />
      <Route path="s_academics" element={<S_Academics />} />
      <Route path="sem1" element={<Sem1 />} />

      {/* Teacher Interface Route */}

      <Route path="t_home" element={<T_Home />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
