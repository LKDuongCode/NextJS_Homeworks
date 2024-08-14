import React from "react";
import ButtonCpn from "./components/ButtonCpn";

export default function page() {
  return (
    <div className="flex gap-5">
      <ButtonCpn children="Default"></ButtonCpn>
      <ButtonCpn type="danger" children="danger"></ButtonCpn>
      <ButtonCpn type="success" children="success"></ButtonCpn>
      <ButtonCpn type="primary" children="primary"></ButtonCpn>
      <ButtonCpn type="warning" children="warning"></ButtonCpn>
    </div>
  );
}
