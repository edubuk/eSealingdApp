import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div style="padding: 0em 1em 1em 1em;">
      <div style="display: flex; column-gap: 10px;">
        <button style="width: 50%;">Register</button>
        <button style="width: 50%;">Display</button>
      </div>
    </div>
  );
});
