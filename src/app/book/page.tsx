import { Metadata } from "next";
import React from "react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Book",
};

export default function PageBook() {
  redirect("/");
  return <p>test</p>;
}
