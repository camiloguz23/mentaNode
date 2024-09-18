import React from "react";
import { UiBook } from "./section";

export default function PageBook({ params }: { params: { id: string } }) {
  const id = params.id ?? "";
  return (
    <>
      <UiBook id={id} />
    </>
  );
}
