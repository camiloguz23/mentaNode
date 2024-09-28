import React, { ComponentProps } from "react";
import style from "./btn-create.module.css";
import { IconPlus } from "@/shared/icons";

interface Props extends ComponentProps<"button"> {
  title: string;
  icon?: boolean;
}

export function UiBtnCreate({ title, className, icon, ...prop }: Props) {
  return (
    <button className={`${style.btn} ${className}`} {...prop}>
      {icon && <IconPlus className="icon" />}
      {title}
    </button>
  );
}
