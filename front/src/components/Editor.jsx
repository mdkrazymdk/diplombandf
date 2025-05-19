import React from "react";

export default function Editor({ value, onChange, placeholder }) {
  return (
    <textarea
      className="w-full border rounded p-2 min-h-[100px]"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder || "Введіть текст..."}
    />
  );
}
