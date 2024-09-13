import React from "react";
import { UiBook } from "../section";
import { auth } from "@clerk/nextjs/server";

export default function PageBook({ params }: { params: { id: string } }) {
  const id = params.id ?? "";
  const { userId } = auth();
  return (
    <>
      <UiBook id={id} />
    </>
  );
}
