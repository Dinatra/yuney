<template lang="pug">
.flex.flex-row.items-center.justify-between.py-4.px-8.fixed.w-full.top-0.left-0.z-40
  router-link(to='/')
    logo
  .nav.flex.flex-row.justify-between.items-center
    router-link.btn.btn--red.mr-4(to='/register') Inscription
    router-link.btn.btn--cloudBurst(to='/login') Connexion

</template>

<script lang="ts">
import Logo from "@/components/svg/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>
