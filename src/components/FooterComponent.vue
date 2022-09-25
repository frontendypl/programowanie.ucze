<template>
  <div class="c-FooterComponent">
    <div class="container">
      <div class="brand">
<!--        <a class="brand__link" href="https://www.ucze.net" >-->
<!--          ucze.net-->
<!--        </a>-->
        <a class="brand__link" href="https://www.panel.ucze.net/#/rejestracja" target="_blank" >
          Twórz
        </a>
        <a class="brand__link" href="https://www.pytania.ucze.net" target="_blank" >
          Rozwiązuj
        </a>
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
  padding: 1em;

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