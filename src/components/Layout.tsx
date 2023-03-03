import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type Props = {};

// children props
// mvc render section
export default function Layout({}: Props) {
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
      <Footer />
    </>
  );
}
