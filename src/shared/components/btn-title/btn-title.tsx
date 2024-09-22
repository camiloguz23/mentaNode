"use client";

import {
  IconDown,
  IconHead1,
  IconHead2,
  IconHead3,
  IconUp,
  useBoolean,
  IconCheck,
  UiBtn,
} from "@/shared/icons";
import style from "./btn-title.module.css";

interface Props {
  onTitle: (number: 1 | 2 | 3) => void;
  activeHeadOne: boolean;
  activeHeadTwo: boolean;
  activeHeadThree: boolean;
}

export function UiBtnTitle({
  onTitle,
  activeHeadOne,
  activeHeadThree,
  activeHeadTwo,
}: Props) {
  const openModal = useBoolean();
  return (
    <div className={style.containerBtn}>
      <UiBtn
        onClick={openModal.toggle}
        title={`Titulos`}
        iconEnd={openModal.value ? <IconUp /> : <IconDown />}
      />
      {openModal.value && (
        <div className={style.content_item}>
          <span className={style.item} onClick={() => onTitle(1)}>
            <IconHead1 />
            {activeHeadOne && <IconCheck className={style.check} />}
          </span>
          <span className={style.item} onClick={() => onTitle(2)}>
            <IconHead2 />
            {activeHeadTwo && <IconCheck className={style.check} />}
          </span>
          <span className={style.item} onClick={() => onTitle(3)}>
            <IconHead3 />
            {activeHeadThree && <IconCheck className={style.check} />}
          </span>
        </div>
      )}
    </div>
  );
}
