"use client";

import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  path: string;
}

export default function UiLink({ children, path }: Props) {
  const url = path.toString();
  return <Link href={"/"}>{children}</Link>;
}
