import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: "",
    isLogged: false,
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
  },
  actions: {
    login(token: string) {
      this.token = token;
      this.isLogged = true;
    },

    logout() {
      localStorage.removeItem("token");
      this.token = "";
      this.isLogged = false;
    },
  },
});
