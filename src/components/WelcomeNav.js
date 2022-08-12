import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeNav = () => {
  const navigate = useNavigate();
  const refreshPage = () => {
    window.location.reload(false);
  };
  const onClickHandler1 = () => {
    navigate("/users");
  };
  const onClickHandler2 = () => {
    refreshPage();
  };
  return (
    <nav className="navBar">
      <span className="link" onClick={onClickHandler1}>
        Visualizza i nostri utenti
      </span>
      <span className="link" onClick={onClickHandler2}>
        Registra un nuovo utente
      </span>
    </nav>
  );
};

export default WelcomeNav;
