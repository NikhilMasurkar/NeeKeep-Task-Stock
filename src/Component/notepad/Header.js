import React from "react";
import HeaderLeftCom from "./headerCompo/HeaderLeftCom";
import HeaderMiddle from "./headerCompo/HeaderMiddle";
import HeaderRight from "./headerCompo/HeaderRight";


const Header = ({ Toggle }) => {
  return (
    <>
      <header>
        <div className="left">
          <HeaderLeftCom Toggle={Toggle} />
        </div>
        <div className="middle">
          <HeaderMiddle />
        </div>
        <div className="right">
          <HeaderRight />
        </div>
      </header>
    </>
  );
};

export default Header;
