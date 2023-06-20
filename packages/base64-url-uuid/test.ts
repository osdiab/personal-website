import fc from "fast-check";
import { test } from "vitest";
import { base64UrlToUuid, uuidToBase64Url } from ".";

test("Encodes and decodes consistently", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.uuid(),
      async (uuidString) =>
        uuidString ===
        (await base64UrlToUuid(await uuidToBase64Url(uuidString)))
    ),
    { numRuns: 10_000 }
  );
});

const validCharactersRegex = /^[a-zA-Z0-9_-]+$/;
test("Results is properly encoded", async () => {
  await fc.assert(
    fc.asyncProperty(fc.uuid(), async (uuidString) =>
      validCharactersRegex.test(await uuidToBase64Url(uuidString))
    ),
    { numRuns: 10_000 }
  );
});
test("Results in shorter encoding", async () => {
  await fc.assert(
    fc.asyncProperty(
      fc.uuid(),
      async (uuidString) =>
        uuidString.length > (await uuidToBase64Url(uuidString)).length
    )
  );
});
