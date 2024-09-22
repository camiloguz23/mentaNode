import React, { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export function IconAddTable(prop: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...prop}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke-width="2"
        d="M11 4h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9h-8m0-5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V9m8-5v5M3 9v6m0-6h8m-8 6v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H11V9m-8 6h8m4 1h3m0 0h3m-3 0v3m0-3v-3"
      />
    </svg>
  );
}
