import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div style="padding: 1em 1em; ">
      <div style="column-gap: 10px; display: flex; width: auto;">
        <button class="button-group" style="width: auto;">
          Use Browser Wallet
        </button>
        <button class="button-group" style="width: auto;">
          Use Wallet Connect
        </button>
      </div>
      <p style="padding-top: 1em;  color: #7303fc">
        Connected to: <span class="walletAddress"></span>
      </p>
    </div>
  )
})
