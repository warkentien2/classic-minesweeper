import { useState } from "react";

export const useInput = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      setState(parseInt(value) as unknown as T);
    } else if (value === "true" || value === "false") {
      setState(Boolean(value) as unknown as T);
    } else {
      setState(value as unknown as T);
    }
  };

  return [state, onChange] as const;
};
