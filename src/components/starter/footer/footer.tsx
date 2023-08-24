import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  // const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container container-purple">
        <div class={styles.sociallinks} style="text-align: center; padding: 5vh 0vh; column-gap: 10px;">
          <a target="_blank" href="https://www.linkedin.com/in/edubuk-ai-driven-decentralized-skilling-ecosystem-on-blockchain/"><i class="fa fa-linkedin"></i></a>
          <a target="_blank" href="https://t.me/+boPh8H_HpNljZDZl"><i class="fa fa-telegram"></i></a>
          <a target="_blank" href="https://www.instagram.com/edubuk_/"><i class="fa fa-instagram"></i></a>
          <a target="_blank" href="https://twitter.com/edubuktrust"><i class="fa fa-twitter"></i></a>
          <a target="_blank" href="https://www.facebook.com/edubuk.trst/"><i class="fa fa-facebook"></i></a>
          <a target="_blank" href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos"><i class="fa fa-youtube"></i></a>
        </div>
        <a href="https://www.edubuk.io/" target="_blank" class={styles.anchor}>
          <span style="color: #ffffff; font-weight: 600;">Made with ❤️  by Edubuk.io</span>
        </a>
        <div style="padding-top: 2vh; justify-content: center; text-align: center">
          <span style="padding-top: 1em; font-weight: 600; color: #ffffff"><span style="font-size: 1.2em">©</span> Copyright 2023 - Edubuk</span>
        </div>
      </div>
    </footer>
  );
});
