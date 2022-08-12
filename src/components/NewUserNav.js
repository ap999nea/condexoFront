import React from "react";
import { useNavigate } from "react-router-dom";

const NewUserNav = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };
  return (
    <nav className="navBar">
      <span onClick={onClickHandler} className="link">
        Registra un nuovo utente
      </span>
    </nav>
  );
};

export default NewUserNav;
