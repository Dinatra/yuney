<template lang="pug">
div(class="bg-prussianBlue w-80 flex-none rounded-tr-2xl rounded-br-2xl shadow-xl")
    div(class="w-full items-center justify-center p-10")
        LogoWhite(class="mx-auto")
    div(class="sidebar ")
        ul(class="flex flex-col justify-center items-center mt-20 m-0")
            li(class="w-full")
                a(class="nav-item")
                    HomeIcon
                    p(class="ml-4 text-white") Accueil
            li(class="w-full")
                a(class="nav-item")
                    GameIcon
                    p(class="ml-4 text-white") Les jeux
            li(class="w-full")
                a(class="nav-item")
                    RankIcon
                    p(class="ml-4 text-white") Classement
            li(class="w-full")
                a(class="nav-item")
                    CrewIcon
                    p(class="ml-4 text-white") Les guildes
            li(class="w-full")
                a(class="nav-item")
                    OptionIcon
                    p(class="ml-4 text-white") Paramètres
            li(class="w-full")
                a(class="nav-item")
                    LogoutIcon
                    p(class="ml-4 text-white" @click="logout") Déconnexion
                    

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/store/auth";
import LogoWhite from "@/components/svg/LogoWhite.vue";
// Icons
import HomeIcon from "@/components/svg/Icons/HomeIcon.vue";
import GameIcon from "@/components/svg/Icons/GameIcon.vue";
import RankIcon from "@/components/svg/Icons/RankIcon.vue";
import CrewIcon from "@/components/svg/Icons/CrewIcon.vue";
import OptionIcon from "@/components/svg/Icons/OptionIcon.vue";
import LogoutIcon from "@/components/svg/Icons/LogoutIcon.vue";
import router from "@/router";

export default defineComponent({
  components: {
    LogoWhite,
    HomeIcon,
    GameIcon,
    RankIcon,
    CrewIcon,
    OptionIcon,
    LogoutIcon,
  },

  setup() {
    const auth = useAuthStore();

    const logout = () => {
      auth.logout();

      router.push("/");
    };
    return {
      logout,
    };
  },
});
</script>
