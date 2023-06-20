const isBrowser = typeof window !== "undefined";
const dashRegex = /-/g;

const hexStringToBytes = (hex: string): Uint8Array => {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2)
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  return bytes;
};

const bytesToHexString = (bytes: Uint8Array): string =>
  Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const base64UrlEncode = async (bytes: Uint8Array): Promise<string> => {
  let base64: string;
  if (isBrowser) {
    const blob = new Blob([bytes], { type: "application/octet-binary" });
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    await new Promise((resolve) => (reader.onloadend = resolve));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    base64 = (reader.result as string).split(",")[1]!;
  } else {
    base64 = Buffer.from(bytes).toString("base64");
  }
  return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
};

const base64UrlDecode = async (base64Url: string): Promise<Uint8Array> => {
  base64Url = base64Url.replace("-", "+").replace("_", "/");
  while (base64Url.length % 4) base64Url += "=";
  if (isBrowser) {
    const response = await fetch(
      `data:application/octet-binary;base64,${base64Url}`
    );
    return new Uint8Array(await response.arrayBuffer());
  } else {
    return new Uint8Array(Buffer.from(base64Url, "base64"));
  }
};

export const uuidToBase64Url = async (uuid: string): Promise<string> =>
  base64UrlEncode(hexStringToBytes(uuid.replace(dashRegex, "")));

export const base64UrlToUuid = async (base64Url: string): Promise<string> => {
  const hex = bytesToHexString(await base64UrlDecode(base64Url));
  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32),
  ].join("-");
};
