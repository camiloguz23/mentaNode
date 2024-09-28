"use client";

import React from "react";
import style from "./modal.module.css";
import { UiBodyModalCreate, UiBtnCreate } from "@/shared";

export interface Props {
  stateModal: string;
  onChange: (value: string) => void;
  value: string;
  onSave: () => void;
  titleBtn: string;
  onOpenModal: () => void;
}

export function UiModal({
  onChange,
  onSave,
  stateModal,
  value,
  titleBtn,
  onOpenModal,
}: Props) {
  return (
    <div className={style.modal}>
      <UiBtnCreate title={titleBtn} icon onClick={onOpenModal} />
      <UiBodyModalCreate
        onChange={onChange}
        stateModal={stateModal}
        value={value}
        titleBtn={"Guardar"}
        onSave={onSave}
      />
    </div>
  );
}
