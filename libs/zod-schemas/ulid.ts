import { isValid } from "ulidx";
import { z } from "zod";

export const ulidSchema = z
  .string()
  .refine((input) => isValid(input), "Must be a valid ULID");
