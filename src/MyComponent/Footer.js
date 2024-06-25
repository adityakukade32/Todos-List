import React from "react";

const Footer = () => {
  let mystyle = {
    top: "150px",
    position: "relative",
  };
  return (
    <footer className="bg-dark text-light py-3" style={mystyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};

export default Footer;
