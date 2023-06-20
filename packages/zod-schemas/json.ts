import { z } from "zod";

export const jsonString = z.string().transform((input, ctx): unknown => {
  try {
    return JSON.parse(input);
  } catch (error) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Invalid JSON",
      path: [],
    });
    return z.NEVER;
  }
});
