import React, { ComponentProps } from "react";
import style from "./input.module.css";

type Props = ComponentProps<"input">;
export function Input({ className, ...rest }: Props) {
  return <input className={`${style.input} ${className}`} {...rest} />;
}
