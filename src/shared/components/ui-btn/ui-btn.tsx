import React, { ComponentProps } from "react";
import style from "./btn.module.css";

interface Prop extends ComponentProps<"button"> {
  title: string;
  iconEnd?: React.ReactNode;
}

export function UiBtn({ title, iconEnd, className, ...rest }: Prop) {
  return (
    <button className={`${style.btn} ${className}`} {...rest}>
      {title} {iconEnd}
    </button>
  );
}
