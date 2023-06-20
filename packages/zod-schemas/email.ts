import { z } from "zod";
import emailRegex from "email-regex";

export const emailSchema = z.string().regex(emailRegex({ exact: true }));
