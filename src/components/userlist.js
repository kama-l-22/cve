import React from "react";
import User from "./user";

export default function Userlist() {
  const list = [
    { name: "kamal" },
    { name: "Nirmal" },
    { name: "guru" },
    { name: "dhana" },
    { name: "vickey" },
    { name: "bhargav" },
  ];
  return (
    <div className="userlist">
      {list.map((user) => {
        return <User name={user.name} />;
      })}
    </div>
  );
}
