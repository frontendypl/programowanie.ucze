<template>
  <div class="c-FooterComponent">
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data(){
    return {

    }
  },
  computed: {
    year(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.c-FooterComponent{

  @media screen and (min-width: 1000px){
    font-size: 12px;
  }

  background-color: black;
  color: #fff;
  padding: 2em 0;

  .container {

  }

}
</style>