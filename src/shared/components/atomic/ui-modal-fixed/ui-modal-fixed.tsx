import React, { ComponentPropsWithRef } from "react";
import style from "./modal.fixed.module.css";

interface Props extends ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
}

export function UiModalFixed({ children, className, ...rest }: Props) {
  return (
    <div className={`${style.modal} ${className}`} {...rest}>
      {children}
    </div>
  );
}
