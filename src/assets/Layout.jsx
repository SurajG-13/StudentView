import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./context/Theme";

function Layout() {
  const location = useLocation();

  const hideFooterPaths = ["/teacherlogin", "/studentlogin"];

  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
        {!hideFooterPaths.includes(location.pathname) && <Footer />}
      </ThemeProvider>
    </>
  );
}

export default Layout;

// function Layout() {
//   return (
//     <>
//       <Header />

//       <Outlet  />

//       <Footer />
//     </>
//   )
// }
