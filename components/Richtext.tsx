import React from "react";
import styles from "./Richtext.module.css";

export interface IRichtextProps {
  html: string;
  dark?: boolean;
}
export const Richtext: React.FC<IRichtextProps> = ({ html, dark = false }) => (
  <div
    className={`
      ${styles.container}
      ${dark ? styles.dark : ""}
    `}
    dangerouslySetInnerHTML={{ __html: html }}
  ></div>
);
