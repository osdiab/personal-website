import type { SystemStyleObject } from "~gen/pandacss/types";

export type AddCssProp<T> = Omit<T, "class"> & { css?: SystemStyleObject };
