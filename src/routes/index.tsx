import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/starter/hero/hero";

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: "Edubuk eSealing dApp",
  meta: [
    {
      name: "description",
      content: "Edubuk eSealing dApp allows you to eSeal you MIIT Certs and validate the authenticity of your certificates",
    },
  ],
};
