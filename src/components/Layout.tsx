import React, { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type Props = {};

// children props
// mvc render section
export default function Layout() {
  // path değeri useLocation hook ile okunur
  const location = useLocation();

  console.log("location", location);

  const footerTemplate = () => {
    if (location.pathname == "/contact") {
      return <></>;
    } else return <Footer />;
  };

  return (
    <>
      <Header />
      {/* puzzle yapar gibi yukarıda header component */}
      <hr></hr>
      <main>
        <Outlet />
        {/* mvc deki render body denk gelir. */}
        {/* dinamik olarak içeriğin değiştiği kısım */}
      </main>
      <hr></hr>
      {/* en aşağıdaki footer component */}
      {/* <Footer /> */}
      {/* {location.pathname != "/contact" && <Footer />} */}
      {/* sayfadan sayfaya göre arayüzün dinamik olarak değişmesine olanak sağlar. */}
      {footerTemplate()}
    </>
  );
}
