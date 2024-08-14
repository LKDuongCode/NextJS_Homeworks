import React from "react";
import "./scss/hw5.scss";
export default function page() {
  return (
    <div className="container">
      <div className="content">
        <div className="circle-out">
          <div className="circle-in">
            <svg
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h3>Delete blog post</h3>
        <p className="text-slate-400 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo{" "}
        </p>
      </div>
      <div className="buttonList">
        <button className="buttonLeft">Cancel</button>
        <button className="buttonRight">Delete</button>
      </div>
    </div>
  );
}
