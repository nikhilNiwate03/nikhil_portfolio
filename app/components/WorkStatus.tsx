import React from "react";
import "./WorkStatus.css";
const WorkStatus = () => {
  return (
    <div
      className="flex items-center gap-3 rounded-4xl"
      style={{
        border: "1px solid rgb(32, 32, 33)",
        padding: "12px 22px 12px 14px",
      }}
    >
      <div className="vibrate"></div>
      <p
        className="font-sans"
        style={{
          color: "rgb(204, 204, 204)",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Available For Work
      </p>
    </div>
  );
};

export default WorkStatus;
