import { z } from "zod";

export const gameStateSchema = z.object({
  difficulty: z.enum(["beginner", "intermediate", "expert"]),
  shouldShowQuestionMarks: z.boolean(),
  zoom: z.number().refine((val) => [100, 150, 200].includes(val), {
    message: "Value must be one of " + [100, 150, 200].join(", "),
  }),
  position: z.enum(["center", "left"]),
  nightMode: z.boolean(),
  board: z.array(
    z.enum([
      "blank",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "flag",
      "falseFlag",
      "mine",
      "mystery",
      "happy",
      "surprised",
      "dead",
      "victorious",
    ])
  ),
});
