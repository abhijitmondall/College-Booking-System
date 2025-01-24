import { Outlet, useLocation } from "react-router";

import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";
import { useEffect } from "react";

function Main() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Main;
