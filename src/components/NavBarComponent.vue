<template>
  <div class="c-NavBarComponent">
    <div class="container">
      <div class="brand">
        <router-link class="brand__link" :to="{name: 'HomeView'}" >
          <div class="brand__link__top">Programowanie</div>
          <div class="brand__link__bottom">ucze.net</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-NavBarComponent{

  font-size: 10px;

  //@media screen and (min-width: 1000px){
  //  font-size: 16px;
  //}

  background-color: black;
  color: #fff;
  padding: 1.6em 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand{
    font-size: 2em;
    color: #fff;
    &__link{
      color: inherit;

      &__top{
        font-family: nasalization;
      }
      &__bottom{
        font-family: rational-integer;
        text-align: right;
        letter-spacing: 2px;
      }
    }
  }

  .heading {
    font-size: 1.6em;
  }

}
</style>