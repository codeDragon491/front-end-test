import React from "react";
import styles from "./tile.module.scss";

function Tile(props) {
  return (
    <div className={styles.tile}>
      <img src={props.tile.image} alt={props.tile.image_alt}></img>
      <p>
        {props.tile.type} {props.tile.date}
      </p>
      <h2>{props.tile.author}</h2>
      <h1>{props.tile.title}</h1>
      <a className="link" href="#">
        <div className={`arrows_group ${styles.arrow_right_small}`}>
          <svg
            width="62"
            height="21"
            viewBox="0 0 62 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.10352e-05 10.334H58.9158"
              stroke="#F54E52"
              strokeWidth="3"
            />
            <path
              d="M51.0002 2L59.2002 10.2344L51.0002 19"
              stroke="#F54E52"
              strokeWidth="3"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
export default Tile;
