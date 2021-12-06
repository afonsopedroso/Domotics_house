import React, { Component } from "react";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.mainContainer}>
      <div className={styles.row}>
        <button id="btn1">room 1</button>
        <button id="btn2">room 2</button>
      </div>
      <div className={styles.row}>
        <button id="btn3">room 3</button>
        <button id="btn4">room 4</button>
      </div>
      <div className={styles.row}>
        <button id="btn5">room 5</button>
        <button id="btn6">room 6</button>
      </div>
    </div>
    </div>
  );
}

export default MainPage;
