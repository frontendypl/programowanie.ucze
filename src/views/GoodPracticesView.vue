<template>
  <div class="v-GoodPractices">

    <div class="container">
      <div class="heading">
        <h1 class="heading__text"> Dobre Praktyki </h1>
      </div>

      <div class="scopes">

        <router-link :to="{name: 'ScopesView'}" class="blocks__item">
          <div class="scopes__button-back">
            <svg class="scopes__button-back__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          </div>
        </router-link>

        <div class="scopes__container">

          <div class="scopes__container__item">
            <div class="scopes__container__item__name">
              Mobile First
            </div>
          </div>

          <div class="scopes__container__item">
            <div class="scopes__container__item__name">
              GIT
            </div>
          </div>

          <div class="scopes__container__item">
            <div class="scopes__container__item__name">
              BEM
            </div>
          </div>

          <div class="scopes__container__item">
            <div class="scopes__container__item__name">
              Pixel Perfect
            </div>
          </div>

          <div class="scopes__container__item">
            <div class="scopes__container__item__name">
              QA
            </div>
          </div>

          <div class="scopes__container__item" >
            <div class="scopes__container__item__name">
              Flex
            </div>
          </div>

          <div class="scopes__container__item" >
            <div class="scopes__container__item__name">
              DRY
            </div>
          </div>

          <div class="scopes__container__item" >
            <div class="scopes__container__item__name">
              Microservices
            </div>
          </div>

          <div class="scopes__container__item" >
            <div class="scopes__container__item__name">
              JWT
            </div>
          </div>

        </div>

        <router-link class="scopes__button-next" :to="{name: 'OfferView'}">
          <svg class="scopes__button-next__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </router-link>

      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BootstrapLogo from '@/assets/logos/Bootstrap_logo.svg.png'

export default {
  name: 'GoodPracticesView',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss" scoped>
$mobile: 330px;
$hd: 1366px;
$fhd: 1600px;

.v-GoodPractices{

  font-size: 4px;

  @media screen and (min-width: $mobile){
    font-size: 5px;
  }

  @media screen and (min-width: $hd){
    font-size: 9px;
  }

  @media screen and (min-width: $fhd){
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

  .scopes {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgba(#FFF6F6, 0.15);
    box-shadow: 1px 1px 10px rgba(#000000, 0.15);
    border-radius: 4em;


    //min-height: 42em;

    @media screen and (min-width: $hd){
      flex-direction: row;
    }

    &__button-back,
    &__button-next {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ABC7CC;
      cursor: pointer;
      border: 4px solid #ABC7CC;
      border-radius: 4em;
      transition: all 0.25s;

      &:hover {
        border: 4px solid black;
        background: none;
      }
    }

    &__button-back {
      padding: 2.5em 5em;
      //margin: 0 auto 0 0;
      //align-self: flex-start;
      position: absolute;
      top: 0;
      left: 0;
      
      &__icon {
        height: 6em;
      }
    }
    &__button-next {
      padding: 2.5em 5em;
      //margin: 0 0 0 auto;
      &__icon {
        height: 6em;
      }
    }
    &__container {
      width: 100%;
      padding: 6em 5em 6em 2em;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 7em;

      @media screen and (min-width: $hd){
        //justify-content: space-between;
        gap: 5em;
      }

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 20px rgba(black, 0.1);
        padding: 1em;
        border-radius: 2em;

        &:first-of-type{
          margin-left: 20em;
        }

        &__name{
          font-size: 5em;
          text-align: center;
          font-weight: 600;
        }

      }
    }
  }

}
</style>
