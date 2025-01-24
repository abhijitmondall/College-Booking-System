import { Outlet, ScrollRestoration } from "react-router";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* <ScrollRestoration /> */}
    </>
  );
}

export default Main;
