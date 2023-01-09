import { useState,useEffect } from 'react';
import './AsideBar.css'

const AsideBar = (props) => {
  
  
  return (
    <div className={`aside-container`} >
      <ul>
        <li><div className={`aside-bar-items `}>
          <div ><i className="fa-solid fa-house"></i></div>
          <div className={`aside-bar-item-text `}>Home</div>
        </div>
        </li>

        <li><div className={`aside-bar-items `}>
          <div ><i className="fa-solid fa-s"></i></div>
          <div className={`aside-bar-item-text`}>Shorts</div>
        </div>
        </li>

        <li><div className={`aside-bar-items `}>
          <div ><i className="fa-solid fa-layer-group"></i></div>
          <div className={`aside-bar-item-text `}>Subscriptions</div>
        </div>
        </li>
      </ul>
    </div>
  )
}

export default AsideBar
