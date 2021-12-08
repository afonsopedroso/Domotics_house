import React, { Component, useState } from "react";
import styles from "./Config.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setConfigF } from "../../store/config";
import CloseButton from "react-bootstrap/CloseButton";
import $ from "jquery";

function Configs(props) {
  $(function () {
    var rangePercent = $('[type="range"]').val();
    $('[type="range"]').on("change input", function () {
      rangePercent = $('[type="range"]').val();
      $("h4").html(rangePercent + "<span></span>");
      $('[type="range"], h4>span').css(
        "filter",
        "hue-rotate(-" + rangePercent + "deg)"
      );
      // $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
      $("h4").css({
        transform: "translateX(-50%) scale(" + (1 + rangePercent / 100) + ")",
        left: rangePercent + "%",
      });
    });
  });

  const [range, setRange] = useState(0);
  const dispatch = useDispatch();
  const config = useSelector((state) => state.Config.configs);

  function handleClick() {
    dispatch(setConfigF());
  }

  function handleChange(e) {
    setRange(e.target.value);
  }
  
  return (
    <div className={styles.popup}>
      <div className={styles.closeButton}>
        <button onClick={handleClick} className={styles.crossAlone} />
      </div>
      <div className={styles.popupBox}>
        <div className={styles.rangeBarT}>
        <div className={styles.rangeBar}>
          <input type="range" onChange={handleChange} value={range} />
          <div id={styles.h4container}>
        <div id={styles.h4subcontainer}>
          <h4>
            0<span></span>
          </h4>
        </div>
      </div>
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
