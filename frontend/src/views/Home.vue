<!-- eslint-disable max-len -->
<template lang="pug">
.h-screen.home-wrapper
  section.pt-20.text-gray-600.body-font
    .container.items-center.py-10.px-5.mx-auto.flex.flex-col(class='md:flex-row')
      .items-center.mb-16.text-center.flex.flex-col(class='lg:flex-grow md:pr-16 lg:pr-24 md:mb-0 md:w-1/2 md:items-start md:text-left')
        h1.mb-4.text-3xl.font-normal.leading-10.text-mineShaft.title-font(class='sm:text-4xl')
          | Rejoignez une
          br
          span.font-bold.text-cloudBurst communauté
          br
          | de plus de 10 000 personnes
        p.mb-8.leading-relaxed.text-gray-400
          | Vos streameurs n'attendent plus que vous !
        .flex.justify-center
          a.btn.btn--cloudBurst  Rejoignez-nous 
          a.flex.flex-row.items-center.ml-4.btn.btn--gray
            span
              svg.mr-4(width='20' height='20' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(d='M7.99334 1.33334C4.31334 1.33334 1.33334 4.32001 1.33334 8.00001C1.33334 11.68 4.31334 14.6667 7.99334 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 7.99334 1.33334ZM12.6133 5.33334H10.6467C10.4333 4.50001 10.1267 3.70001 9.72668 2.96001C10.9533 3.38001 11.9733 4.23334 12.6133 5.33334ZM8.00001 2.69334C8.55334 3.49334 8.98668 4.38001 9.27334 5.33334H6.72668C7.01334 4.38001 7.44668 3.49334 8.00001 2.69334ZM2.84001 9.33334C2.73334 8.90668 2.66668 8.46001 2.66668 8.00001C2.66668 7.54001 2.73334 7.09334 2.84001 6.66668H5.09334C5.04001 7.10668 5.00001 7.54668 5.00001 8.00001C5.00001 8.45334 5.04001 8.89334 5.09334 9.33334H2.84001ZM3.38668 10.6667H5.35334C5.56668 11.5 5.87334 12.3 6.27334 13.04C5.04668 12.62 4.02668 11.7733 3.38668 10.6667ZM5.35334 5.33334H3.38668C4.02668 4.22668 5.04668 3.38001 6.27334 2.96001C5.87334 3.70001 5.56668 4.50001 5.35334 5.33334ZM8.00001 13.3067C7.44668 12.5067 7.01334 11.62 6.72668 10.6667H9.27334C8.98668 11.62 8.55334 12.5067 8.00001 13.3067ZM9.56001 9.33334H6.44001C6.38001 8.89334 6.33334 8.45334 6.33334 8.00001C6.33334 7.54668 6.38001 7.10001 6.44001 6.66668H9.56001C9.62001 7.10001 9.66668 7.54668 9.66668 8.00001C9.66668 8.45334 9.62001 8.89334 9.56001 9.33334ZM9.72668 13.04C10.1267 12.3 10.4333 11.5 10.6467 10.6667H12.6133C11.9733 11.7667 10.9533 12.62 9.72668 13.04ZM10.9067 9.33334C10.96 8.89334 11 8.45334 11 8.00001C11 7.54668 10.96 7.10668 10.9067 6.66668H13.16C13.2667 7.09334 13.3333 7.54001 13.3333 8.00001C13.3333 8.46001 13.2667 8.90668 13.16 9.33334H10.9067Z' fill='black' fill-opacity='0.54')
            |               Nos réseaux
      div(class='w-5/6 md:w-1/2 lg:w-full lg:max-w-lg')
        .home-img.home-img--heading-img-purple
          img.object-cover.object-center.mx-auto.w-80.h-80.rounded-lg(alt='hero' src='@/assets/img/streamer.jpeg')
          img.absolute.right-20.-bottom-28.w-56(alt='hero' src='@/assets/img/twitch-meteor.png')
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<!-- eslint-disable max-len -->
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Exo:100);

$bg-url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
$bg-width: 50px;
$bg-height: 50px;

/* Animations */
@-webkit-keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}
@-moz-keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}
@-o-keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}
@keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}

@-webkit-keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}
@-moz-keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}
@-o-keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}
@keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}

/* Main styles */
.home-wrapper {
  padding-top: 10rem;
  color: #999;
  font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
  text-align: center;
  /* img size is 50x50 */
  background: url($bg-url) repeat 0 0;

  -webkit-animation: bg-scrolling-reverse 0.92s infinite;
  -moz-animation: bg-scrolling-reverse 0.92s infinite;
  -o-animation: bg-scrolling-reverse 0.92s infinite;
  animation: bg-scrolling-reverse 0.92s infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}
</style>
