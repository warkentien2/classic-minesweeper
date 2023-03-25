import * as z from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

export const isValidState = (input: any) => {
  try {
    const result = schema.parse(input);
    return { isValid: true, result };
  } catch (error) {
    return { isValid: false, error };
  }
};

// Example usage:
// const { isValid, result, error } = isValidState(testInput);
