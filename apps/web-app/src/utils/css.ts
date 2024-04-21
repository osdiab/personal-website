import type { SystemStyleObject } from "~gen/pandacss/types";

export type AddCssProp<T> = T & { css?: SystemStyleObject };
