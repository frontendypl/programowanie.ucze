<template>
  <div class="v-HomeView">

    <div class="container">
      <div class="heading">
        <h1 class="heading__text"> W czym mogę pomóc ?</h1>
      </div>

      <div class="blocks">

        <div class="blocks__item">
          <div class="blocks__item__text">
            Nauka
              <div class="blocks__item__text__separator"></div>
            Programowania *
          </div>
        </div>

        <div class="blocks__item">
          <div class="blocks__item__text">
            Stworzenie
              <div class="blocks__item__text__separator"></div>
            Aplikacji
          </div>
        </div>

        <div class="blocks__item">
          <div class="blocks__item__text">
            Pomoc z istniejącą aplikacją, stroną itp.
          </div>
        </div>

      </div>

      <div class="info">
        <p class="info__text">
          * Online lub Katowice/Tychy
        </p>
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
  font-size: 4px;

  @media screen and (min-width: 1365px){
    font-size: 9px;
  }

  @media screen and (min-width: 1600px){
    font-size: 10px;
  }

  padding: 5em 0;

  .container{

  }

  .heading {
    margin-bottom: 5em;

    &__text {
      text-align: center;
      font-size: 7.5em;
      font-weight: 600;
    }
  }

  .blocks {
    display: flex;


    flex-direction: column;
    justify-content: space-between;
    gap: 3em;

    @media screen and (min-width: 1000px) {
      flex-direction: row;
    }

    &__item {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0 auto;

      padding: 7.5em 4em;
      border: 2px solid rgba(0,0,0,0);
      border-radius: 2em;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.6);
      transition: all 0.2s;

      cursor: pointer;

      &:hover{
        background-color: #ABC7CC;
        border: 2px solid #ABC7CC;
        color: #fff;
        //box-shadow: 1px 1px 10px rgba(0,0,0,0.6);
        box-shadow: none;
      }

      &__text {
        text-align: center;
        width: 100%;
        font-size: 3em;
        font-weight: 600;
        line-height: 150%;

        &__separator {

        }
      }
    }
  }

  .info {
    margin-top: 3em;

    &__text{
      font-size: 2.5em;
      font-weight: 600;
    }
  }

}
</style>
