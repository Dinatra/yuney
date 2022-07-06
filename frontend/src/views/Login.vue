<!-- eslint-disable max-len -->

<template lang="pug">
.h-screen.pt-10
  svg.top-0.right-0.absolute.z-0(width='528' height='900' viewbox='0 0 528 900' fill='none' xmlns='http://www.w3.org/2000/svg')
    rect(x='1202.98' y='907.39' width='1376.03' height='767.907' rx='99' transform='rotate(-150.955 1202.98 907.39)' fill='#22D1EE' fill-opacity='0.44')
  section.text-gray-600.body-font.flex.flex-row.items-center.justify-center.z-10
    .mx-auto.mt-40(class='w-1/2 lg:w-1/2')
      h1.font-semibold.text-4xl.text-royalBlue.text-center
        | Connectez-vous
      form.mx-auto.mt-10(class='w-1/2' @submit.prevent='sendForm')
        .mt-4.w-full
          input.w-full.input.input--gray(type='text' placeholder='Email' v-model='email')
        .mt-8.w-full
          input.w-full.input.input--gray(type='password' placeholder='Password' v-model='password')
        .flex.flex-row.justify-between.items-center.mt-8
          router-link.font-normal.text-sm.text-cloudBurst.underline(to='/register') Pas de compte ? Rejoignez-nous
          button.btn.btn--blue(type='submit') Connexion
  svg.bottom-0.left-0.absolute.z-10(width='586' height='621' viewbox='0 0 586 621' fill='none' xmlns='http://www.w3.org/2000/svg')
    rect(x='-909' y='1017.5' width='1376.03' height='767.907' rx='99' transform='rotate(-47.6846 -909 1017.5)' fill='#3D5AF1' fill-opacity='0.13')

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Login } from "@/graphql/services/UserService";

export default defineComponent({
  setup() {
    const form = reactive({
      email: "",
      password: "",
    });

    const sendForm = () => {
      Login(form.email, form.password);
    };

    return {
      ...toRefs(form),
      sendForm,
    };
  },
});
</script>
