import { component$ } from "@builder.io/qwik";
import WalletConnector from "../walletConnector/walletConnector";
import Tasks from "../tasks/tasks";
import FileSelector from "../fileSelector/fileSelector";
import Hash from "../hash/hash";
import Register from "../register/register";

export default component$(() => {
  return (
    <>
      <div style="border: 3px solid #ff80dfff; border-radius: 8px;">
        <WalletConnector />
        <Tasks />
        <FileSelector />
        <Hash />
        <Register />
      </div>
    </>
  )
})
