<!-- eslint-disable max-len -->

<template lang="pug">
.h-screen.pt-4
  section.text-gray-600.body-font.flex.flex-row.items-center.justify-center.z-10
    .mx-auto.mt-40.border-r.border-gray-300(class='w-1/2')
      form.mx-auto.mt-10(class='w-1/2' @submit.prevent='sendForm')
        div(class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6')
          .home-img.home-img--heading-img-ice-blue
            img.object-cover.object-center.h-full.w-80.mx-auto.rounded-lg(alt='hero' src='@/assets/img/viewer.jpeg')
    .mx-auto.mt-40(class='w-1/2')
      h1.font-semibold.text-4xl.text-royalBlue.text-center
        | Inscrivez-vous
      form.mx-auto.mt-10(class='w-1/2' @submit.prevent='sendForm')
        .mt-4.w-full
          input.w-full.input.input--gray(type='text' placeholder='Votre pseudo' v-model='nickname')
        .mt-4.w-full
          input.w-full.input.input--gray(type='text' placeholder='Email' v-model='email')
        .mt-4.w-full
          input.w-full.input.input--gray(type='date' placeholder='Date de naissance' v-model='birthdate')
        .mt-8.w-full
          input.w-full.input.input--gray(type='password' placeholder='Mot de passe' v-model='password')
        .mt-8.w-full
          input.w-full.input.input--gray(type='password' placeholder='Confirmer votre mot de passe' v-model='confirmPassword')
        .flex.flex-row.justify-between.items-center.mt-8
          router-link.font-normal.text-sm.text-cloudBurst.underline(to='/login') Déjà inscrit ? connectez-vous !
          button.btn.btn--blue(type='submit') Valider
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Register } from "@/graphql/services/UserService";
import { useToast } from "vue-toastification";

export default defineComponent({
  setup() {
    const toast = useToast();

    const form = reactive({
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      birthdate: "",
    });

    const sendForm = () => {
      if (form.password !== form.confirmPassword) {
        toast.error("Veuillez saisir les mêmes mots de passe");
      } else {
        Register(form.email, form.nickname, form.birthdate, form.password);
      }
    };

    return {
      ...toRefs(form),
      sendForm,
    };
  },
});
</script>
