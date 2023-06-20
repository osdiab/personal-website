import z from "zod";
import { base64UrlToUuid } from "@osdiab-website/base64-url-uuid";

export const base64UrlUuidSchema = z
  .string()
  .transform(async (uuid) => await base64UrlToUuid(uuid))
  .refine(
    (v) => z.string().uuid().safeParse(v).success,
    "Not a valid encoded UUID"
  );

export const uuidOrBase64UrlUuidSchema = z.union([
  z.string().uuid(),
  base64UrlUuidSchema,
]);
