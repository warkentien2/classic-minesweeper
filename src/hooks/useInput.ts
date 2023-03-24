import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [state, setState] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return [state, onChange];
};
