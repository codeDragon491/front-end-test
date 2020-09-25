import React from "react";
import styles from "./hero.module.scss";

function Hero1(props) {
  const titleClone = props.hero.title
    .replace("end", "<br>")
    .replace("i", "<span style='visibility:hidden;'>i</span>")
    .replace("sse", "<br>");
  return (
    <div className={styles.article_wrapper}>
      <article className={`article ${styles.article_1}`}>
        <svg className={styles.line_group} height="80%" width="100vw">
          <line
            className="line-primary line-1"
            x1="101%"
            y1="5%"
            x2="-1%"
            y2="86%"
          ></line>
          <line
            className="line-primary line-1"
            x1="101%"
            y1="49%"
            x2="-1%"
            y2="87%"
          ></line>
        </svg>
        <svg className={styles.line_single} height="80%" width="100vw">
          <line
            className="line-primary line-2"
            x1="101%"
            y1="92%"
            x2="-1%"
            y2="56%"
          ></line>
        </svg>
        <div className={styles.title_group}>
          <h1>{props.hero.title}</h1>
          <h1 dangerouslySetInnerHTML={{ __html: titleClone }}></h1>
        </div>
        <p>{props.hero.description}</p>
        <a className="link" href="#tiles">
          <div className={`arrows_group ${styles.arrow_down_big}`}>
            <svg
              width="125"
              height="46"
              viewBox="0 0 125 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3H106.86V40.7655" stroke="#F54E52" strokeWidth="6" />
              <path
                d="M122.5 24.2656L107 41.2656L90.5 24.2656"
                stroke="#F54E52"
                strokeWidth="6"
              />
            </svg>
          </div>
        </a>
      </article>
    </div>
  );
}

export default Hero1;
