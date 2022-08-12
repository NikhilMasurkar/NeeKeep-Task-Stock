import React from 'react'
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import img from "../images/keep_2020q4_48dp.png";

const HeaderLeftCom = ({Toggle}) => {
 
  return (
    <>
         <div className="toggle-icon" onClick = {()=>Toggle()}>
            <FormatListBulletedIcon />
          </div>
          <div className="home_icon">
            <img src={img} alt="logoPhoto" className="Notepad-Image" />
            <h1>NeeKeep</h1>
          </div>
    </>
  )
}

export default HeaderLeftCom
