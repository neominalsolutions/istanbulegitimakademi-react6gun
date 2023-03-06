import { Navigate, useLocation } from "react-router-dom";

export type AuthGuardProps = {
  children: any;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const location = useLocation();

  // access token sahip isem
  if (localStorage.getItem("token") != undefined) {
    return children;
  } else {
    // hangi sayfadan istek ,ile gelirsen gel eğer ki token yoksa unauthorize yönlendir.
    // Navigate componenti bir yönledirme görevi gören bir component
    return <Navigate to="/unauthorize" state={{ from: location }} />;
  }
};
