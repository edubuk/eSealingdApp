import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div style="padding: 0em 1em 1em 1em;">
      <div style="display: flex; flex-direction: column;">
        <p style="padding-bottom: 1em;  color: #7303fc"> 
          <span>Select a File: </span>
        </p>
        <input 
          type="file"
          style="
            border: 1px solid #7303fcff; 
            border-radius: 8px; 
            padding: 0.4em;
            background-color: #7303fcff;
            font-size: 1em;
          font-weight: 600;
          color: #ffffff;
          " />
      </div>
    </div>
  );
});
