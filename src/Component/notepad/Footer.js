import React from "react";
import { useState } from "react";

const Footer = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  const [ctime, setctime] = useState(time);

  setInterval(() => {
    let cctime = new Date().toLocaleTimeString();
    setctime(cctime);
  }, 1000);
  return (
    <>
      <footer className="footer">
        <h1>{ctime}</h1>
        <h1>Copyright © {date}</h1>
      </footer>
    </>
  );
};

export default Footer;
