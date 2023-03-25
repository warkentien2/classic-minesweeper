import { useState } from "react";

type HTMLFormFieldElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useInput = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const onChange: React.ChangeEventHandler<HTMLFormFieldElement> = (
    e: React.ChangeEvent<HTMLFormFieldElement>
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
