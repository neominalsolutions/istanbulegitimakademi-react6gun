import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function LoginPage({}: Props) {
  const navigate = useNavigate();

  const login = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("token", response.data.token);

        navigate("/home");
      });
  };

  const logout = () => {
    localStorage.removeItem("token"); // tarayıcıdan token sil
  };

  return (
    <div>
      <button onClick={login}>Oturum Aç</button>
      <button onClick={logout}>Oturumdan Çık</button>
    </div>
  );
}
