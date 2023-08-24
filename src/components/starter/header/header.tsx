import { component$ } from "@builder.io/qwik";
// import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { Logo } from "../icons/edubuk";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]} style="margin: 0;">
        <div class={styles.logo} style="display: flex;">
          <a href="/" title="qwik">
            <Logo width={130} height={130} />
          </a>
        </div>
        <a href="https://edubuk.io" target="_blank">
        <button>
          Explore CETA Certification
        </button>
        </a>
      </div>
    </header>
  );
});
