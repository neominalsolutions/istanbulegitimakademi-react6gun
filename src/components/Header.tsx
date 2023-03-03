import Menu from "./Menu";

import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <h1>Istanbul Eğitim Akademi</h1>
      <hr></hr>
      {/* component içerisinde başka component çağırdık */}
      <Menu />
    </header>
  );
}
