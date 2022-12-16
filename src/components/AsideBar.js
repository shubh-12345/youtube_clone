import { useState,useEffect } from 'react';
import './AsideBar.css'

const AsideBar = (props) => {
  const [click1,setCLick1]=useState(false);
    useEffect(()=>{
        setCLick1(props.click)
    },[props])
  
  return (
    <div className={`aside-container ${click1===true?'aside-container-toggle':``}`} >
      <ul>
        <li><div className={`aside-bar-items ${click1===true?'aside-bar-items-toggle':''}`}>
          <div className={click1===true?'aside-bar-icons-toggle':''}><i className="fa-solid fa-house"></i></div>
          <div className={`aside-bar-item-text ${click1===true?'aside-bar-item-text-toggle':''}`}>Home</div>
        </div>
        </li>

        <li><div className={`aside-bar-items ${click1===true?'aside-bar-items-toggle':''}`}>
          <div className={click1===true?'aside-bar-icons-toggle':''}><i className="fa-solid fa-s"></i></div>
          <div className={`aside-bar-item-text ${click1===true?'aside-bar-item-text-toggle':''}`}>Shorts</div>
        </div>
        </li>

        <li><div className={`aside-bar-items ${click1===true?'aside-bar-items-toggle':''}`}>
          <div className={click1===true?'aside-bar-icons-toggle':''}><i className="fa-solid fa-layer-group"></i></div>
          <div className={`aside-bar-item-text ${click1===true?'aside-bar-item-text-toggle':''}`}>Subscriptions</div>
        </div>
        </li>
      </ul>
    </div>
  )
}

export default AsideBar
