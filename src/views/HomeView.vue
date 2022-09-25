<template>
  <div class="v-HomeView">
    <div class="logos-container container container--flex">
      <div class="logos">
        <img class="logos__img logos__img--panel" src="../assets/Logo_pytania.png">
        <img class="logos__img logos__img--pytania" src="../assets/Logo_panel.png">
      </div>
      <div class="heading">
        <h1 class="heading__text">
          Twórz
        </h1>
        <h2 class="heading__sub-text">
          Materiały edukacyjne, kartkówki, powtórki.
        </h2>
      </div>
    </div>
    <div class="examples-container container">
      <div class="examples">
        <div class="examples__heading">
          Zobacz gotowe przykłady ...
        </div>
        <div class="examples__buttons">
          <a class="examples__buttons__button examples__buttons__button--1"
                       href="https://pytania.ucze.net/#/LF006" target="_blank"
          >
            Figury Geometryczne
          </a>

          <a class="examples__buttons__button examples__buttons__button--2"
                       href="https://pytania.ucze.net/#/Lj042" target="_blank"
          >
            j. Polski dla uczniów z Ukrainy
          </a>

          <a class="examples__buttons__button examples__buttons__button--3"
                       href="https://pytania.ucze.net/#/LJ094" target="_blank"
          >
            Jesień
          </a>

          <a class="examples__buttons__button examples__buttons__button--4"
                       href="https://pytania.ucze.net/#/LD980" target="_blank"
          >
            Dodawanie do 10
          </a>

          <a class="examples__buttons__button examples__buttons__button--5"
                       href="https://pytania.ucze.net/#/LD403" target="_blank"
          >
            Dni tygodnia
          </a>

          <a class="examples__buttons__button examples__buttons__button--6"
                       href="https://pytania.ucze.net/#/LC734" target="_blank"
          >
            czytanie ze zrozumieniem
          </a>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="start">
        <div class="start__text">
          i stwórz własne.
        </div>
        <a class="start__link" href="https://www.panel.ucze.net/#/rejestracja" target="_blank">
          Zacznij Teraz !
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
.v-HomeView{
  margin: 7em 0;

  .container{
    //display: flex;
    gap: 2rem;
  }

  .logos-container{
    margin-top: 2em;
    margin-bottom: 5em;

    @media screen and (min-width: 1200px) {
      margin-bottom: 7em;
    }
  }

  .logos{
    position: relative;
    width: 40%;

    @media screen and (min-width: 450px){
      width: 30%;
    }

    &__img{
      width: 7em;
      position: absolute;
      top: -2.5em;
      right: -6em;

      @media screen and (min-width: 450px){
        width: 9em;
        top: -4.5em;
        right: -6em;
      }

      &--panel{
        //transform: translate(10%);
      }
      &--pytania{
        transform: translate(-75%, 75%);
      }
    }
  }

  .heading{
    text-align: center;
    font-weight: 600;
    //padding-left: 3em;

    &__text {
      font-size: 4em;
      margin-bottom: 0.3em;
    }
    &__sub-text{
      font-size: 2em;
      line-height: 120%;
    }
  }

  .examples-container {
    margin-bottom: 5em;
  }

  .examples {
    width: 100%;

    &__heading{
      text-align: center;
      font-weight: 600;
      font-size: 2.4em;
      margin-bottom: 1em;
    }

    &__buttons {
      display: flex;
      gap: 1em;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;

      &__button {
        display: inline-block;
        color: #fff;
        background-color: darkred;
        padding: 0.5em;
        font-size: 2.5em;
        border-radius: 10px;
        max-width: 60%;
        text-align: center;


        &--1 {
          background-color: #EA4242;
        }
        &--2 {
          background-color: #42A1EA;
        }
        &--3 {
          background-color: #632B2B;
        }
        &--4 {
          background-color: #1D8F37;
        }
        &--5 {
          background-color: #A8BD1E;
        }
        &--6 {
          background-color: #C342EA;
        }
      }
    }
  }

  .start {
    text-align: center;
    font-weight: 600;
    margin-top: 1em;

    &__text {
      font-size: 2em;
      margin-bottom: 0.5em;
    }

    &__link {
      font-size: 3em;
      color: black;
      padding: 0.5em;
      border: 2px solid black;
      border-radius: 10px;
      transition: all 0.25s;
      width: 100%;
      display: block;


      &:hover{
        background-color: orangered;
        border-color: orangered;;
        color: #fff;
      }
    }
  }
}
</style>
