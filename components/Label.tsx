import React from "react";
import styles from "./Label.module.css";

interface ILabelProps {
  children: string;
}

export const Label: React.FC<ILabelProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
