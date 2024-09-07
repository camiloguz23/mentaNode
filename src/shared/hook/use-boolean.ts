"use client";

import { useState } from "react";

export const useBoolean = () => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  const onFalse = () => setValue(false);
  const onTrue = () => setValue(true);
  return {
    value,
    toggle,
    onFalse,
    onTrue,
  };
};
