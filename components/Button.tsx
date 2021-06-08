import React from "react";
import styles from "./Button.module.css";

export interface IButtonProps {
  href: string;
  label: string;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
}

export const Button: React.FC<IButtonProps> = ({
  href,
  label,
  size = "md",
  align = "center",
}) => (
  <div className={`${styles.container} ${styles[align]}`}>
    <a href={href} className={styles[size]}>
      {label}
    </a>
  </div>
);
