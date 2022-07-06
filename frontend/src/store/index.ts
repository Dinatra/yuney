import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    root: "",
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {},
});
