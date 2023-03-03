import React, { Fragment } from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function Menu({}: Props) {
  return (
    <Fragment>
      <nav>
        {/* raeact react router domdan gelen link component ile sayfalar arası geçiş olacağını anlıyor a href yapısını kulanmıyoruz */}
        {/* asp-controller asp-action asp-page */}
        <Link to="home"> Anasayfa </Link>
        &nbsp;
        <Link to="about"> Hakkımızda </Link>
        &nbsp;
        <Link to="contact"> İletişim </Link>
      </nav>
    </Fragment>
  );
}
