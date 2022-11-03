<template>
  <header class="p-4 md:p-8 flex justify-end">
    <button
      class="flex px-1 text-dark dark:text-light hover:bg-light hover:dark:bg-dark transition-all rounded-full"
      @click="toogleMode"
    >
      <span class="material-symbols-outlined md:text-3xl">
        {{ isDarkMode ? "light_mode" : "dark_mode" }}
      </span>
    </button>
  </header>
  <main class="px-4 md:px-16 mt-6 md:mt-16">
    <div class="text-lg md:text-xl mb-8">Hi 👋🏻😄</div>
    <h1 class="font-black text-4xl md:text-6xl mb-3">I'm Mohammadmahdi,</h1>
    <h2 class="font-extralight text-2xl md:text-4xl mb-14">
      a frontend developer.
    </h2>
    <hr class="-rotate-2 border-t-4 mb-16" />
    <p class="text-lg md:text-2xl mb-10 md:mb-14">
      You can contact me in the following ways. 👇🏻
    </p>
    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <a
        class="py-2 w-40 flex justify-center items-center rounded-sm font-semibold border-4 border-darker dark:border-lighter hover:bg-light dark:hover:bg-dark transition-colors cursor-pointer"
        v-for="contactBtn in contactBtns"
        :key="contactBtn.text"
        :href="contactBtn.link"
      >
        {{ contactBtn.text }}
      </a>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue"

const isDarkMode = ref(false)

const contactBtns = ref([
  {
    text: "Email",
    link: "mailto:alvansaz@pm.me",
  },
  {
    text: "Skype",
    link: "https://join.skype.com/invite/ONdHVhB762SQ",
  },
  {
    text: "Telegram",
    link: "https://alvansaz.t.me",
  },
])

const toogleMode = () => {
  document.querySelector("html").classList.toggle("dark")
  isDarkMode.value = isDarkMode.value ? false : true
}
</script>
