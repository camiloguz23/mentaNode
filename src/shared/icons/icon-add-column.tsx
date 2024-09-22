import React, { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

export function IconAddColumn(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.5 3.75a.75.75 0 0 0-.75-.75h-8.5A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h8.5a.75.75 0 0 0 .75-.75v-4.268A1.748 1.748 0 0 1 13.518 14H10v-4h3.518A1.748 1.748 0 0 1 15.5 8.018zM4.5 14v-4h4v4zM14 8.5h-4v-4h4zm-5.5 0h-4V6.25c0-.966.784-1.75 1.75-1.75H8.5zm0 11H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5h4zm1.5-4h4v4h-4zm9.5-11.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0zm-4.748 5.44a.75.75 0 0 0-.062 1.058l.89 1.002h-2.83a.75.75 0 0 0 0 1.5h2.83l-.89 1.002a.75.75 0 1 0 1.12.996l2-2.25a.75.75 0 0 0 0-.996l-2-2.25a.75.75 0 0 0-1.058-.063"
      />
    </svg>
  );
}
