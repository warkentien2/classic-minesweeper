import { useState } from "react";

type HTMLFormFieldElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useInput = (initialValue: string | number | boolean) => {
  const [state, setState] = useState<string | number | boolean>(initialValue);

  const onChange: React.ChangeEventHandler<HTMLFormFieldElement> = (
    e: React.ChangeEvent<HTMLFormFieldElement>
  ) => {
    const value = e.target.value;

    if (!isNaN(Number(value))) {
      setState(parseInt(value));
    } else if (value === "boolean") {
      setState(!state);
    } else {
      setState(value);
    }
  };

  return [state, onChange] as const;
};
