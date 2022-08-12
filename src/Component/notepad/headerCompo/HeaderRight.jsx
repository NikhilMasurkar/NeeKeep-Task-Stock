import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from "@material-ui/icons/Refresh";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import Profile from "../images/20220623_032230.jpg";

const HeaderRight = () => {
  const Refresh = ()=>{
    
  }
  return (
    <>
       <div className="rightFirst">
            
            <div className="icons active">
            <SearchIcon />
            </div>
           
            <div className="icons">
              <RefreshIcon  onClick ={Refresh}/>
            </div>

            <div className="icons">
              <ViewStreamIcon />
            </div>

            <div className="icons">
              <SettingsIcon className="icons"/>
            </div>
          </div>

          <div className="rightSecond">
            <div className="icons">
              <AppsIcon />
            </div>
            <img src={Profile} alt="ProfilePhoto" id="profile-image" />
          </div>
    </>
  )
}

export default HeaderRight
