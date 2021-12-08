import React, { Component, useState } from "react";
import styles from "./MainPage.module.css";
import Configs from "./Popup/Configs";
import { useSelector, useDispatch } from 'react-redux'
import { setConfig } from "../store/config";

function MainPage() {

  const config = useSelector(state => state.Config.configs)
  const dispatch = useDispatch();
  
  
  function handleClick(e){
    e.preventDefault();
    dispatch(setConfig())
    console.log(e.target.id)
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
      {config ? <Configs /> : null}
    </div>
    
    </div>
  );
}

export default MainPage;
