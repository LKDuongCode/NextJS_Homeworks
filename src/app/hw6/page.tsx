import React from "react";
import "./scss/hw6.scss";
import Image from "next/image";
export default function page() {
  return (
    <div>
      <div className="navContainer">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/ptit-duong.appspot.com/o/Screenshot%202024-08-13%20160725.png?alt=media&token=421dbb8c-c980-47f6-9ca2-eb067705d1f5"
          alt=""
          width={134}
          height={34}
        ></Image>

        <div className="flex gap-12">
          <p className="active">Home</p>
          <p className="normal">Updates</p>
          <p className="normal">Services</p>
          <p className="normal">Features</p>
          <p className="normal">About Us</p>
        </div>

        <Image
          src="https://firebasestorage.googleapis.com/v0/b/ptit-duong.appspot.com/o/Screenshot%202024-08-13%20161828.png?alt=media&token=cdc16db6-040f-4039-969b-26dcc4e8f65c"
          alt=""
          width={50}
          height={50}
        ></Image>
      </div>
    </div>
  );
}
