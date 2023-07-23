// custom overrides of other included typescript declarations
// https://stackoverflow.com/a/73987412

// the default is to make it just return `any` all the time, which sucks
declare module "*.svg" {
  import type { ComponentProps } from "react";
  const content: (props: ComponentProps<"svg">) => JSX.Element;

  export default content;
}
