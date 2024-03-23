<template>
  <div class="keen-slider" ref="container">
    <div class="keen-slider__slide lazy__slide" v-for="(src, idx) in images" :key="idx">
      <img :src="loaded[idx] ? src : ''" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

const props = defineProps(['images'])

const loaded = ref([true]);
const [container] = useKeenSlider({
  animationEnded: (s) => {
    const idx = s.track.details.rel;
    loaded.value[idx] = true;
  },
  loop: true,
  initial: 0,
});

</script>

<style>
.lazy__slide {
  height: 50vw;
  background: rgb(255, 75, 64);
  background-color: linear-gradient(0deg,
      rgba(255, 75, 64, 1) 0%,
      rgba(255, 154, 63, 1) 100%);
  background-image: url("https://keen-slider.io/images/loader.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100px;
  min-height: auto;
}

@media (min-width: 768px) {
  .lazy__slide {
    height: 300px;
  }
}

.lazy__slide img {
  background-color: transparent;
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>
