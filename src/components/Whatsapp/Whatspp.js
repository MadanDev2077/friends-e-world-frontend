import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Whatsapp.css";
const Whatspp = () => {
  return (
    <div className="w_app">
      <a href="https://api.whatsapp.com/send?phone=9994589189" target="_blank">
        <AiOutlineWhatsApp />
      </a>
    </div>
  );
};
export default Whatspp;
