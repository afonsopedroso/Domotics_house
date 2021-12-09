import React, { Component, useState } from "react";
import styles from "./Config.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setConfigF } from "../../store/config";
import CloseButton from "react-bootstrap/CloseButton";
import $ from "jquery";

function Configs(props) {


  const [range, setRange] = useState([
    0,0,0
  ]);
  const dispatch = useDispatch();
  const config = useSelector((state) => state.Config.configs);

  function handleClick() {
    dispatch(setConfigF());
  }

  function handleChange(e) {
    console.log(e.target.id);

    // setRange(e.target.value);
    switch (e.target.id) {
      case "1":
        setRange(datas =>({
          ...datas,
          [0]:e.target.value
        }))        
        break;
      case "2":
        setRange(datas =>({
          ...datas,
          [1]:e.target.value
        }))   
        break;
           
      case "3":
        setRange(datas =>({
          ...datas,
          [2]:e.target.value
        }))
      break;
      default:
        break;
    }
  }
  console.log(props.room)
  return (
    <div className={styles.popup}>
      <div className={styles.closeButton}>
        <button onClick={handleClick} className={styles.crossAlone} />
      </div>

      <div className={styles.popupBox}>
        <div className={styles.rangeBarT}>
         {props.room==="kitchen" ? <div className={styles.rangeBar}>
            <input
              type="range"
              onChange={handleChange}
              id="1"
              value={range[0]}
            />
          </div> : null}
          <div className={styles.rangeBar}>
            <input
              type="range"
              onChange={handleChange}
              id="2"
              value={range[1]}
            />
          </div>
          <div className={styles.rangeBar}>
            <input
              type="range"
              onChange={handleChange}
              id="3"
              value={range[2]}
            />
          </div>
          {/* <div className={styles.counter}>
            <span>{range}</span>
        </div>  */}
        </div>
      </div>
    </div>
  );
}

export default Configs;
