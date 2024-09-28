import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

interface Props {
  label: string;
  options: { label: string; value: string }[];
  onSelect?: (value: string) => void;
}

export function UiSelect({ label, options, onSelect }: Props) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      {!!options.length && (
        <SelectContent >
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      )}
    </Select>
  );
}
