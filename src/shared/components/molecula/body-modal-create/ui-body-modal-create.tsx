"use client";

import React, { useState } from "react";
import style from "./body-modal.module.css";
import { UiBtnCreate, Input } from "../../atomic";

interface Props {
  titleBtn: string;
  stateModal: string;
  onChange: (value: string) => void;
  value: string;
  onSave: () => void;
}

export function UiBodyModalCreate({
  titleBtn,
  stateModal,
  onChange,
  value,
  onSave,
}: Props) {
  return (
    <div className={`${style.bodyModal} ${style[stateModal]}`}>
      <Input
        className={stateModal}
        onChange={(value) => onChange(value.target.value)}
        type="text"
        value={value}
      />
      <UiBtnCreate title={titleBtn} onClick={onSave} />
    </div>
  );
}
