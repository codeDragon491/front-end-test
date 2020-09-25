import React from "react";
import styles from "./hero.module.scss";

function Hero2(props) {
  const titleClone = props.hero.title.replace(
    "Your ch",
    "<span style='visibility:hidden;'>Your\xa0ch</span>"
  );
  return (
    <div className={styles.article_wrapper}>
      <article className={`article ${styles.article_2}`}>
        <svg className={styles.line_group} height="70%" width="100vw">
          <line
            className="line-secondary line-2"
            x1="101%"
            y1="11%"
            x2="38%"
            y2="26%"
          ></line>
        </svg>
        <svg className={styles.line_group} height="70%" width="100vw">
          <line
            className="line-secondary line-1"
            x1="101%"
            y1="47%"
            x2="-1%"
            y2="87%"
          ></line>
        </svg>
        <svg className={styles.line_single} height="85%" width="100vw">
          <line
            className="line-secondary line-2"
            x1="101%"
            y1="85%"
            x2="-1%"
            y2="40%"
          ></line>
        </svg>
        <div className={styles.title_group}>
          <h1>{props.hero.title}</h1>
          <h1 dangerouslySetInnerHTML={{ __html: titleClone }}></h1>
        </div>
        <div className={styles.title_link_group}>
          <h2>
            {props.hero.subtitle}
            <span>
              {" "}
              <a className="link" href="#">
                <div className={`arrows_group ${styles.arrow_right_big}`}>
                  <svg
                    width="121"
                    height="38"
                    viewBox="0 0 121 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 18.7668H114.86"
                      stroke="#F54E52"
                      strokeWidth="7"
                    />
                    <path
                      d="M98 3.03247L115 18.5325L98 35.0325"
                      stroke="#F54E52"
                      strokeWidth="7"
                    />
                  </svg>
                </div>
              </a>
            </span>
          </h2>{" "}
        </div>
        <p>{props.hero.description}</p>
      </article>
    </div>
  );
}

export default Hero2;
