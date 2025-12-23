<script>
  import { onMount } from "svelte";
  import { sendMessage, getHistory } from "$lib/api";

  let messages = [];
  let input = "";
  let loading = false;
  let sessionId = localStorage.getItem("sessionId");
  let bottom;

  onMount(async () => {
    if (sessionId) {
      messages = await getHistory(sessionId);
    }
  });

  async function send() {
    if (!input.trim() || loading) return;

    loading = true;
    messages = [...messages, { sender: "user", text: input }];

    const res = await sendMessage(input, sessionId);
    sessionId = res.sessionId;
    localStorage.setItem("sessionId", sessionId);

    messages = [...messages, { sender: "ai", text: res.reply }];
    input = "";
    loading = false;
  }

  $: bottom?.scrollIntoView({ behavior: "smooth" });
</script>

<div class="chat">
  {#each messages as m}
    <div class={m.sender}>{m.text}</div>
  {/each}

  {#if loading}
    <div class="ai typing">Agent is typing…</div>
  {/if}

  <div bind:this={bottom}></div>

  <input
    bind:value={input}
    placeholder="Ask about shipping, returns..."
    on:keydown={(e) => e.key === "Enter" && send()}
  />
  <button on:click={send} disabled={loading}>Send</button>
</div>

<style>
  .chat {
    max-width: 500px;
    margin: auto;
  }
  .user {
    text-align: right;
    margin: 6px;
  }
  .ai {
    text-align: left;
    margin: 6px;
  }
  .typing {
    font-style: italic;
    opacity: 0.6;
  }
</style>
