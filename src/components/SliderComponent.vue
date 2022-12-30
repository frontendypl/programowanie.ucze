<template>
  <div id="slider" class="c-SliderComponent">
    <slot></slot>
  </div>
</template>

<script>
//TODO:
// - Slajdy przekazać przez slot
// - ostylować w nadrzednym komponencie
// - konfiguracje przekazac przez propsy

import $ from "jquery";
import "@/assets/slick/slick.min.js"

export default {
  name: 'SliderComponent',
  props: {
    sliderConfig: {
      type: Object,
      required: true
    }
  },
  created(){

  },
  mounted(){
    $('#slider').slick({
      nextArrow: "<div class='next-arrow'></div>",
      prevArrow: "<div class='prev-arrow'></div>",
      ...this.sliderConfig
    })
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/slick/slick.css";

.c-SliderComponent {

}

</style>