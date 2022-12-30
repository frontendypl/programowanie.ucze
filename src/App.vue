<template>
  <div class="app" id="app">
    <NavBarComponent />

    <router-view/>

    <ChatComponent :apiUrl="apiUrl" />

    <FooterComponent />
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import ChatComponent from "@/components/ChatComponent";

export default {
  components: {
    ChatComponent,
    FooterComponent,
    NavBarComponent
  },
  computed: {
    ...mapGetters(['apiUrl'])
  }
}
</script>

<style lang="scss">
$mobile: 330px;
$hd: 1366px;
$fhd: 1600px;

html{
  font-size: 8px;

  //@media screen and (min-width: 330px){
  //  font-size: 8px;
  //}
  //
  //@media screen and (min-width: 380px){
  //  //font-size: 10px;
  //}
  //
  //@media screen and (min-width: 450px){
  //  //font-size: 12px;
  //}
  //

  @media screen and (min-width: 1367px){
    font-size: 10px;
  }

}

.app{

  font-family: 'Roboto', sans-serif;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    max-width: 100%;
  }

  .written-font{
    font-family: 'element';
  }

  .container {
    max-width: 1000px;

    @media screen and (min-width: $hd) {
      max-width: $hd;
    }

    margin: 0 auto;
    padding: 0 1.6rem;

    &--flex{
      display: flex;
    }
  }

  .c-ChatComponent {
    margin-bottom: 5em;
    text-align: center;
  }

  .c-FooterComponent{
    //position: absolute;
    //bottom: 0;
    //left: 0;
    //width: 100%;
  }

}


</style>
