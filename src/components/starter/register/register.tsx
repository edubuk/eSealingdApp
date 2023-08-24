import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div style="padding: 0em 1em 1em 1em;">
      <button style="width: 100%;" type="submit">
        Register File Hash
      </button>
      <div style="padding-top: 1em;">
        <span >
          <p style="color: #7303fcff">Transaction Status:</p>
          <p class="transactionstatus"></p>
        </span>
      </div>
    </div>
  );
});
