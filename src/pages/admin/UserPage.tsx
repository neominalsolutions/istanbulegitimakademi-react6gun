import React, { useState } from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import "./UserPage.css"; // user css import et

type Props = {};

export default function UserPage({}: Props) {
  const [user, setUser] = useState(["ali", "ahmet", "can"]);

  // Alt GR , tuşu ile backtick işareti yaptık
  // metinsel ifadelere değişken değerlerini geçerek string birleştirme yapmamızı sağlar.

  // $"işlem sonucu : {sonuc}" // işlem sonucu: 5 çıktı

  const [queryParams] = useSearchParams(); // querystringden değer okuma

  console.log(
    "queryParams",
    queryParams.get("active"),
    queryParams.get("sort")
  );

  return (
    <div>
      {user.map((item, index) => {
        return (
          // sayfa üzerindeki linklerden hangisinin şuan aktif olduğunu Link değil navlink componenti gösterir.
          // isActive değerine göre hangisi şuan seçiliyi kendisi yönetir.
          <NavLink
            className={({ isActive }) => {
              console.log("item", item);
              console.log("isActive", isActive);
              return queryParams.get("active") == item || isActive
                ? "active"
                : "passive";
            }}
            key={index}
            to={`${item}`}
          >
            <p key={index}>{item}</p>
          </NavLink>
        );
      })}
      <Outlet />
    </div>
  );
}
