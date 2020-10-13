import React from "react";
import "./SidebarOptions.scss";

function SidebarOptions(props) {
  return (
    <div className="sidebarOption">
      {props.Icon ? (
        <>
          <props.Icon className="sidebarOption__icon" />
          <h4>{props.title}</h4>
        </>
      ) : (
        <p>{props.title}</p>
      )}
    </div>
  );
}

export default SidebarOptions;
