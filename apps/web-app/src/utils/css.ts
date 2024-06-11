import type { css } from "~gen/pandacss/css";

export type CssProp = Parameters<typeof css>[0];
export type AddCssProp<T> = Omit<T, "class"> & { css?: CssProp };
