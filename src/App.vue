<template>
  <div class="app" id="app">
    <NavBarComponent />

    <router-view/>

    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    FooterComponent,
    NavBarComponent
  }
}
</script>

<style lang="scss">
html{
  font-size: 10px;

  @media screen and (min-width: 450px){
    font-size: 16px;
  }
}

.app{
  font-size: 10px;

  font-family: 'Roboto', sans-serif;

  a {
    text-decoration: none;
  }

  img{
    max-width: 100%;
  }

  .written-font{
    font-family: 'element';
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.6rem;
  }

  .c-FooterComponent{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

}


</style>
