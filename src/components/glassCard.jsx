import React from "react";
import Style from "./component.module.css";

export default ({title="",mainText="",image}) => {
  return (
    <>
      <div className={Style.cws_container}>
        <div className={Style.cws_box}>
          <span></span>
          <div className={Style.cws_content}>
            <img src={image} />
            <h2>{title}</h2>
            <p>
              {mainText}
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </>
  );
};
