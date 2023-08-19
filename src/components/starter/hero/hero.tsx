import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
// import ImgThunder from "~/media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      {/* <ImgThunder class={styles["hero-image"]} /> */}
      <h1>
        Edubuk
        <br />
        <span class="highlight">eSeal</span> dApp
      </h1>
      <p style="font-size: 24px">Your Authentic <span class="highlight">Certificates</span></p>
      <div class={styles["button-group"]}>
        <button style="color: #7303fc; font-weight: 900"
          onClick$={async () => {
            const defaults = {
              spread: 360,
              ticks: 70,
              gravity: 0,
              decay: 0.90,
              startVelocity: 25,
              colors: ["#b0f7f2", "#f4afd4", "#ffc8ae", "#b7f7bf", "#dfb4f2"],
              origin: {
                x: 0.5,
                y: 0.35,
              },
            };

            function loadConfetti() {
              return new Promise<(opts: any) => void>((resolve, reject) => {
                if ((globalThis as any).confetti) {
                  return resolve((globalThis as any).confetti as any);
                }
                const script = document.createElement("script");
                script.src =
                  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
                script.onload = () =>
                  resolve((globalThis as any).confetti as any);
                script.onerror = reject;
                document.head.appendChild(script);
                script.remove();
              });
            }

            const confetti = await loadConfetti();

            function shoot() {
              confetti({
                ...defaults,
                particleCount: 80,
                scalar: 1.2,
              });

              confetti({
                ...defaults,
                particleCount: 60,
                scalar: 0.75,
              });
            }

            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            setTimeout(shoot, 300);
            setTimeout(shoot, 400);
          }}
        >
          eSeal Your Certificates
        </button>
        {/* <a */}
        {/*   href="https://qwik.builder.io/docs" */}
        {/*   target="_blank" */}
        {/*   class="button button-dark" */}
        {/* > */}
        {/*   Explore the docs */}
        {/* </a> */}
      </div>
    </div>
  );
});
