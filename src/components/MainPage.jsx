import React, { Component, useState } from "react";
import styles from "./MainPage.module.css";
import Configs from "./Popup/Configs";
import { useSelector, useDispatch } from 'react-redux'
import { setConfig } from "../store/config";

function MainPage() {

  const config = useSelector(state => state.Config.configs)
  const dispatch = useDispatch();
  const[button,setButton]=useState("")
  
  
  function handleClick(e){
    e.preventDefault();
    setButton(e.target.id)    
    dispatch(setConfig())
    
  }
  
  return (
    <div className={styles.wrapper}>
    
    <div className={styles.mainContainer}>
      <div className={styles.row}>
        <button id="btn1" onClick={handleClick}>room 1</button>
        <button id="btn2" onClick={handleClick}>room 2</button>
      </div>
      <div className={styles.row}>
        <button id="btn3" onClick={handleClick}>room 3</button>
        <button id="btn4" onClick={handleClick}>room 4</button>
      </div>
      <div className={styles.row}>
        <button id="btn5" onClick={handleClick}>room 5</button>
        <button id="btn6" onClick={handleClick}>room 6</button>
      </div> 
      {config && button==="btn1"? <Configs room ="kitchen" /> : null}
      {config && button==="btn2"? <Configs room="livingRoom" /> : null}
      {config && button==="btn3"? <Configs room="bedroom" /> : null}
      {config && button==="btn4"? <Configs room="bedroom2" /> : null}
      {config && button==="btn5"? <Configs room="wc"/> : null}
      {config && button==="btn6"? <Configs room="balcony" /> : null}
    </div>
    
    </div>
  );
}

export default MainPage;
