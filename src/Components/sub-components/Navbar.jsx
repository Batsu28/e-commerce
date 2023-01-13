import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(prop) {
  const { MENUS } = prop;
  const navigate = useNavigate();

  console.log("1 ", MENUS);
  return (
    <nav>
      <ul>
        {MENUS.map((menu, index) => (
          <li key={index}>
            <button onClick={() => navigate(menu.url)}>{menu.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
