import { defineStore } from "pinia";

export default defineStore("scanning", {
  state: () => ({ value: false }),

  actions: {
    set(scanning) {
      this.value = scanning;
    },
  },
});