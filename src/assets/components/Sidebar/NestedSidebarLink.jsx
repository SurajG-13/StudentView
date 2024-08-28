import React from "react";
import SidebarLink from "./SidebarLink";
import { useState } from "react";

// Define the structure of a sidebar link item
// const defaultLinks = [
//   { to: "/dashboard", name: "Dashboard", icon: <svg>...</svg> },
//   { to: "/profile", name: "Profile", icon: <svg>...</svg> },
//   // Add more default links or make this empty if not needed
// ];

function NestedSidebarLink({ links, isOpen, onLinkClick }) {
  return (
    <div className={`flex flex-col gap-3 ${isOpen ? "block" : "hidden"}`}>
      {links.map((link, index) => (
        <SidebarLink
          key={index}
          to={link.to}
          name={link.name}
          isOpen={isOpen}
          onClick={onLinkClick}
        >
          {link.icon}
        </SidebarLink>
      ))}
    </div>
  );
}

export default NestedSidebarLink;
