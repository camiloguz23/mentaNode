"use client";

import { useCallback, useRef, useState } from "react";
import { TOAST_MESSAGE } from "@/shared";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const useDebounce = () => {
  const onAddContent = useMutation(api.query.saveContent);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [valueFilter, setValueFilter] = useState<{
    content: string;
    email: string;
    idPage: string;
  }>({
    content: "",
    email: "",
    idPage: "",
  });

  const onSearch = useCallback(
    (value: { email: string; content: string; idPage: string, categorieId: string }) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        onAddContent({
          ...value,
        })
          .then(() => {
            TOAST_MESSAGE.success();
          })
          .catch(() => {
            TOAST_MESSAGE.error();
          });
      }, 2000);
    },
    [],
  );

  return {
    valueFilter,
    onSearch,
  };
};
