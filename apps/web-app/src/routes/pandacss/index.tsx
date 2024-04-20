import { component$ } from "@builder.io/qwik";
import { css } from "~gen/pandacss/css";

export default component$(() => {
  return (
    <div
      class={css({
        padding: 10,
        bg: "red.400",
        height: "dvh",
        margin: 100,
        fontSize: 30,
      })}
    >
      This box is styled with PandaCSS.
    </div>
  );
});
