import { useState } from "react";

type HTMLFormFieldElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useInput = <T>(initialValue: T) => {
  const [state, setState] = useState<T>(initialValue);

  const onChange: React.ChangeEventHandler<HTMLFormFieldElement> = (
    e: React.ChangeEvent<HTMLFormFieldElement>
  ) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      setState(parseInt(value) as number as T);
    } else if (value === "boolean") {
      setState(!state as boolean as T);
    } else {
      setState(value as T);
    }
  };

  return [state, onChange] as const;
};
