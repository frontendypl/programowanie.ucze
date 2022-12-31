<template>
  <footer class="c-FooterComponent">
    <div class="container">

      <a class="footer-text" href="https://ucze.net">
        ucze.net
      </a>

    </div>
  </footer>
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

    .footer-text {
      display: block;
      font-family: rational-integer;
      color: #fff;
      text-align: center;
      font-size: 2em;
    }

  }

}
</style>