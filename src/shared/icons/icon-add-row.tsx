import React, { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export function IconAddRow(prop: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...prop}
    >
      <path
        fill="currentColor"
        d="M3.75 15.5a.75.75 0 0 1-.75-.75v-8.5A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v8.5a.75.75 0 0 1-.75.75h-4.268A1.748 1.748 0 0 0 14 13.518V10h-4v3.518A1.748 1.748 0 0 0 8.018 15.5zm6.25-7h4v-4h-4zm9.5 5.5v-4h-4v4zm-4-5.5h4V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5zm-7-4H6.25A1.75 1.75 0 0 0 4.5 6.25V8.5h4zm-4 9.5h4v-4h-4zm-.75 5.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm5.44-4.748a.75.75 0 0 1 1.058-.063l1.002.89V12.75a.75.75 0 0 1 1.5 0v2.83l1.002-.89a.75.75 0 0 1 .996 1.12l-2.25 2a.75.75 0 0 1-.996 0l-2.25-2a.75.75 0 0 1-.063-1.058"
      />
    </svg>
  );
}
