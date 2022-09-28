<template>
  <div class="c-FooterComponent">
    <div class="container">
      <div class="links">
        <a class="links__link" href="https://www.panel.ucze.net/#/rejestracja" target="_blank" >
          Twórz
        </a>
        <a class="links__link" href="https://www.pytania.ucze.net" target="_blank" >
          Rozwiązuj
        </a>
        <a class="links__link written-font" href="https://www.ucze.net">
          ucze.net
        </a>
        <a class="links__link links__link--freepik "
            href="https://www.freepik.com/free-vector/watercolor-back-school-background-with-white-space_9001487.htm#query=watercolor-back-school-background&position=0&from_view=search&track=sph"
        >
          Image by pikisuperstar
        </a> on Freepik
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
  padding: 2em 0;

  .container {

  }

  .links{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__link {
      color: #fff;
      font-size: 2em;

      &:first-of-type {
        font-size: 3em;
        margin-bottom: 15px;
      }

      &:nth-of-type(2){
        font-size: 1.8em;
        margin-bottom: 15px;
      }

      &:last-child {
        margin-bottom: 0;
        font-weight: 600;
      }

      &--freepik {
        font-size: 1em;
        margin-top: 2em;
      }
    }
  }

}
</style>