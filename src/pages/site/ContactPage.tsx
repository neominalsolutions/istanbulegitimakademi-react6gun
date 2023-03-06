import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode; // reactNode tipinde tanımlanan herşey <></> veya html elementler olsun hepsi aşağıdaki children yerine bind ediliyor
};

export default function ContactPage({ children }: Props) {
  return (
    <>
      <div>Contact Page</div>
      {/* dışarıdan contact page içerisine tanımlanan componentleri arayüze children olarak yansıtırız. */}
      {children}
    </>
  );
}
