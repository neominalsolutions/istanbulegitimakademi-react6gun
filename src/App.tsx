import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  // useRoutes hook ile uygulama içerisindeki sayfaları tanımlıyoruz.
  // nested route yapısını kullanıcaz sebebi ise route dosyalarının bir layout üzerinden açılmasını sağlamak
  // const routes = useRoutes([
  //   {
  //     path: "",
  //     element: <>Home Page</>,
  //   },
  //   {
  //     path: "about",
  //     element: <>About Page</>,
  //   },
  // ]);

  // alt alta route tanımlaması yöntemine nested route diyoruz

  const navigate = useNavigate();

  const onGotoHome = () => {
    let result = window.confirm("Anasayfaya gitmek istediğinize emin misiniz?");

    // kayıt sonrası liste syafasına yönlendirme
    // MVC redirectToACTİON BENZER
    // Link to a href yapısına benzer.

    if (result) {
      navigate("home"); // ts tarafından ilgili linke gitmek için useNavigate hook kullanırız.
      // Link to yöntemi ise jsx dosyasından bir yönlendirme yapmak için kullanılır
    }
  };

  const routes = useRoutes([
    {
      path: "",
      element: <Layout />, // ilk açılışı layout component üzerinden yap bunun altındaki linkleri ise children olarak tanımlama yap diyoruz
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "*", // bu route değerini tüm route değerlerinin sonuna yazmayı unutmayalım.
      element: (
        <>
          {" "}
          <h1>Sayfa Bulunamadı 404 Page</h1>
          <br></br>
          <Link to="home">Home Page</Link>
          <br></br>
          <button onClick={onGotoHome}>Anasayfaya git</button>{" "}
        </>
      ),
    },
  ]);

  // Link Component'de to ile yazılmış değerlerin useRoutes hook içerisinde path ile eşleşmesi lazım

  return routes;
}

export default App;
