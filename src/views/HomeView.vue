<template>
  <div class="v-HomeView">
    <div class="container">
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
  margin: 5em 0;

  .container{
    display: flex;
    gap: 2rem;
  }

  .logos{
    position: relative;
    width: 40%;

    &__img{
      width: 7em;
      position: absolute;
      top: -2.5em;
      right: -6em;

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
}
</style>
