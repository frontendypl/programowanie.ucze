<template>
  <div class="c-NavBarComponent">
    <div class="container">
      <div class="brand">
        <router-link class="brand__link written-font" :to="{name: 'HomeView'}" >
          ucze.net
        </router-link>
      </div>
      <div class="heading written-font">
        Aplikacje dla nauczycieli i uczniów.
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

  @media screen and (min-width: 1000px){
    font-size: 16px;
  }

  background-color: black;
  color: #fff;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand{
    font-size: 2em;
    font-weight: 600;
    &__link{
      color: inherit;
    }
  }

  .heading {
    font-size: 1.6em;
  }

}
</style>