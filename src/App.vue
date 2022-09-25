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
  font-size: 7px;

  @media screen and (min-width: 330px){
    font-size: 8px;
  }

  @media screen and (min-width: 380px){
    font-size: 10px;
  }

  @media screen and (min-width: 450px){
    font-size: 12px;
  }

  @media screen and (min-width: 1367px){
    font-size: 14px;
  }

}

.app{

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
    padding: 0 1.6rem;

    &--flex{
      display: flex;
    }
  }

  .c-FooterComponent{
    //position: absolute;
    //bottom: 0;
    //left: 0;
    //width: 100%;
  }

}


</style>
