<template>
  <div v-if="token" class="flex flex-row bg-gray-100">
    <Sidebar />
    <router-view />
  </div>
  <div v-else>
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import { defineComponent, computed } from "vue";
import { useAuthStore } from "@/store/auth";

export default defineComponent({
  components: {
    Header,
    Sidebar,
  },

  setup() {
    const auth = useAuthStore();

    return {
      token: computed(() => auth.isLogged),
    };
  },
});
</script>
