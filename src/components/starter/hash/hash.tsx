import { component$ } from "@builder.io/qwik";
import styles from './hash.module.css';

export default component$(() => {
  return (
    <div style="padding: 0em 1em 1em 1em;">
      <button style="width: 100%;">
        Compute File Hash
      </button>
      <div style="padding-top: 1em; display: flex; flex-direction: row;">
        <p style=" color: #7303fc">Hash of the selected file: </p><p class={styles.hashvalue}
          style="
            background-color: #ff80df66; 
            border: 1px solid #ff80dfaa;
            border-radius: 8px;
          "
        ></p>
      </div>
    </div>
  );
});
