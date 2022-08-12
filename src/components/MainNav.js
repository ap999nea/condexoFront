import React from "react";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/users");
  };
  return (
    <nav className="navBar">
      <span className="link" onClick={onClickHandler}>
        Visualizza i nostri utenti
      </span>
    </nav>
  );
};

export default MainNav;
