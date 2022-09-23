<template>
  <div class="c-FooterComponent">
    <div class="container">
      <div class="brand">
        <router-link class="brand__link written-font" :to="{name: 'HomeView'}" >
          {{year}} - ucze.net
        </router-link>
      </div>
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

  .brand{
    font-size: 2em;
    &__link{
      color: inherit;
    }
  }

  .container{
    display: flex;
    justify-content: center;
  }

}
</style>