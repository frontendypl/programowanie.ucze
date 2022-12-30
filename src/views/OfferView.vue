<template>
  <div class="v-OfferView">
    <div class="container">

      <div class="heading">
        <div class="heading__text">
          Chcesz tworzyć strony/aplikacje takie jak
        </div>
        <div class="heading__text heading__text--title">
          ucze.net?
        </div>
      </div>

      <div class="slider">
        <SliderComponent
            :sliderConfig="{
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          centerMode: true,
          autoplay: false,
          autoplaySpeed: 2000,
          responsive: [
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  // arrows: false,
                }
              }
          ]
          }"
        >
<!--          TODO : slajdy tutaj wkładać, a sam slider zrobić bardziej jako kontener + javascript
-->

          <div class="slider__slide">
            <img src="@/assets/slider/panel_rejestracja.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/panel_listy.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/panel_zadania.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/panel_tworzenie_z_1.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/panel_tworzenie_z_2.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/panel_uczniowie.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/front_1.jpg" alt="">
          </div>

          <div class="slider__slide">
            <img src="@/assets/slider/front_2.jpg" alt="">
          </div>
          <div class="slider__slide">
            <img src="@/assets/slider/front_3.jpg" alt="">
          </div>
          <div class="slider__slide">
            <img src="@/assets/slider/front_4.jpg" alt="">
          </div>



        </SliderComponent>
      </div>

      <div class="offer">

        <div class="offer__heading">
          <div class="offer__heading__text">
            Oferuję pomoc w
          </div>
        </div>

        <div class="offer__list">
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              Tworzeniu stron internetowych / aplikacji
            </div>
          </div>
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              Debugowaniu i rozwiązywaniu problemów w istniejących stronach / aplikacjach
            </div>
          </div>
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              Opanowaniu dobrych praktyk: Mobile First, BEM
            </div>
          </div>
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              Pracy z GiT'em.
            </div>
          </div>
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              Tworzeniu aplikacji do portfolio.
            </div>
          </div>
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              Pisaniu API opartych na Node.js, Express oraz MongoDB...
            </div>
          </div>
          <div class="offer__list__item">
            <div class="offer__list__item__text">
              ... oraz realizacji dowolnych pomysłów
            </div>
          </div>
        </div>

      </div>

      <div class="price">
        <div class="price__quote">
          <div class="price__quote__text">
            20zł/h
          </div>
          <div class="price__quote__text price__quote__text--up">
            *
          </div>
        </div>

        <div class="price__info">
          <div class="price__info__text price__info__text--up">
            *
          </div>
          <div class="price__info__text">
            Kwota zależna od ilości godzin, rodzaju materiału, sposobu prowadzenia zajęć itp.
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent";

// import RegistrationImage from "@/assets/slider/panel_rejestracja.jpg"

export default {
  name: 'OfferView',
  components: {
    SliderComponent
  }
}
</script>

<style lang="scss" >

.v-OfferView {

  font-size: 4px;
  padding: 5em 0;

  @media screen and (min-width: 1365px){
    font-size: 9px;
  }

  @media screen and (min-width: 1600px){
    font-size: 10px;
  }

  .heading {
    text-align: center;
    margin-bottom: 10em;
    &__text {
      font-size: 6em;

      &--title{
        font-family: rational-integer;
        font-size: 12em;
      }
    }
  }

  .slider{

    margin-bottom: 10em;

    .slick-list{
      padding-top: 9em !important;
      padding-bottom: 9em !important;
    }

    .next-arrow, .prev-arrow {
      background-size: contain;
      background-repeat: no-repeat;
      width: 3em;
      height: 4em;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 2;
      padding: 2em;
    }

    .next-arrow {
      background-image: url("@/assets/slider/chevron-right-solid.svg");
      right: 0;
    }

    .prev-arrow {
      background-image: url("@/assets/slider/chevron-left-solid.svg");
      left: 0;
    }

    &__slide{
      //background-color: red;
      padding: 1.2em;
      img{
        transition: transform 0.4s;
      }

      &.slick-center{


        img{
          transform: scale(1.1);
          box-shadow: 0 0 2px rgb(0 0 0);
          transition: all 0.25s;

          @media screen and (min-width: 500px) {
            transform: scale(2);
          }
        }
      }
      &:not(.slick-center){
        img{
          transform: scale(0.8);
          opacity: 0.3;
        }
      }
    }
  }

  .offer {
    font-weight: 600;
    margin-bottom: 6em;
    &__heading {
      margin-bottom: 5em;
      &__text {
        font-size: 8em;
        text-align: center;
      }
    }

    &__list {

      &__item {
        margin-bottom: 2em;
        &__text{
          font-size: 4em;
        }

      }

    }

  }

  .price {
    font-weight: 600;

    &__quote {
      display: flex;
      justify-content: center;
      column-gap: 3em;
      margin-bottom: 5em;
      &__text {
        font-size: 10em;
        &--up {
          font-size: 4em;
        }
      }
    }

    &__info {
      display: flex;
      column-gap: 1em;
      &__text {
        font-size: 2.5em;
        &--up {
          font-size: 1.5em;
        }
      }
    }
  }

}

</style>