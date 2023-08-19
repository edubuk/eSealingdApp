import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <div class={styles["button-group"]}>
              <button>
                Use Browser Wallet
              </button>
            </div>
          </li>
          <li>
            <div class={styles["button-group"]}>
              <button>
                Use Wallet Connect
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
});
