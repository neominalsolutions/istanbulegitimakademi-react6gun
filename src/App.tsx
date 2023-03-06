import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, useLocation, useNavigate, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";

import Footer from "./components/Footer";
import Map from "./components/Map";
import AdminLayout from "./components/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import HomePage from "./pages/site/HomePage";
import AboutPage from "./pages/site/AboutPage";
import ContactPage from "./pages/site/ContactPage";
import UserPage from "./pages/admin/UserPage";
import UserDetailPage from "./pages/admin/UserDetailPage";
import LoginPage from "./pages/site/LoginPage";
import { AuthGuard } from "./guards/AuthGuard";

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
  const location = useLocation();

  console.log("location", location);

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
          element: <AboutPage />, // self closing tag
        },
        {
          path: "contact",
          // element: <ContactPage />,
          element: (
            <ContactPage>
              {/* open close tag format */}
              {/* kendi componetimiz içerine bir element göndermek istersek bu formatı kullanıp children olarak props üzerinden bu işlemi yapacağımızı söylememiz lazım */}
              {/* <p>İletişim Haritası</p>
              <p>Lokasyon Bilgileri</p> */}
              <Map />
              {/* map bizim için bir child component */}
              <hr></hr>
              <h1>İstanbul Haritalar</h1>
              {/* child element */}
            </ContactPage>
          ),
        },
      ],
    },
    {
      path: "admin",
      element: (
        // eğer authguard kodundan geçerse admin layout altındaki tüm componentlere erişim sağlar. geçemez ise bizi logine otomatik yönlendirir.
        <AuthGuard>
          <AdminLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "",
          element: <DashboardPage />,
        },
        {
          path: "users", // static route
          element: <UserPage />,
          children: [
            // admin/users/name route değeri ortaya çıkar
            {
              path: ":name", // artık ali değerini name ismi ile yakalayacağız // mvc routing /users/{id} // dynamic route
              element: <UserDetailPage />, // Nested Layout yapısı
            },
          ],
        },
        // {
        //   path: "users/:name", // artık ali değerini name ismi ile yakalayacağız // mvc routing /users/{id} // dynamic route
        //   element: <UserDetailPage />,
        // },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "unauthorize", // admin sayfalarına giderken eğer token bilgim yoksa buradaki unauthorize denilen linke yönleneceğim
      element: (
        <>
          <h1>Bu sayfaya yetkiniz yok !!!</h1>
          <br></br>
          <Link to="/login">Oturum Aç</Link>
        </>
      ),
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
