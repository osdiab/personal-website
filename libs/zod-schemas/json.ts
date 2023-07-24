import { z } from "zod";

export const jsonString = z.string().transform((input, context): unknown => {
  try {
    return JSON.parse(input);
  } catch {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid JSON",
      path: [],
    });
    return z.NEVER;
  }
});
