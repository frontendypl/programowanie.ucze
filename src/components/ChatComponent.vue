<template>
  <div class="c-ChatComponent">
    <div class="call-icon" @click="initChat">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <p class="call-icon__text">Kontakt</p>
    </div>

    <div class="overlay" v-if="show"></div>

    <div class="chat" v-if="show">
      <div class="chat__close" @click="show = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
      <div class="chat__messages" ref="chat">

        <div class="chat__messages__message chat__messages__message--welcome">
          Dzień dobry, w czym możemy pomóc? Zostaw wiadomość!
        </div>

        <div v-for="message in messages" :key="message._id"
            class="chat__messages__message"
             :class="{'chat__messages__message--user': message.type==='message'}"
        >
          {{message.content}}
        </div>

      </div>

      <div class="contact-form">
        <textarea class="contact-form__input" v-model="newMessage" @keydown.enter="handleForm" />
        <button class="contact-form__button" type="button" @click="handleForm">
          wyślij
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

// TODO - dodać licznik nieodczytanych odpowiedzi.
// TODO - ostylować pasek przewijania
// TODO - deploy contact-api
// TODO - file upload (image, pdf, word)

export default {
  name: 'ChatComponent',
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      show: false,
      topic: '',
      messages: [],
      newMessage: ''
    }
  },
  methods: {
    async initChat(){

      if(!this.topic){
        try {
          const response = await axios.post(`${this.apiUrl}/topics`,{
            source: 'ucze.net'
          })
          this.topic = response.data._id
          window.localStorage.setItem('topic', this.topic)
        }catch (e) {
          console.log(e)
        }
      }
      this.show = true
    },
    async getMessages(){
      try {
        const response = await axios.get(`${this.apiUrl}/topics/${this.topic}/chat`)
        this.messages = response.data
      }catch (e) {
        console.log(e)
      }
    },
    async handleForm(){
      try{
        const response = await axios.post(`${this.apiUrl}/messages`,{
          topic: this.topic,
          content: this.newMessage
        })
        this.newMessage = ''
        await this.getMessages()
      }catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    topic: {
      handler(newValue, oldValue){
        const interval = setInterval(()=>{
          this.getMessages()
        },1000)
      }
    },
    messages: {
      handler(newValue, oldValue){
        if(this.show && (newValue.length > oldValue.length)){
          setTimeout(()=>{
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
          },10)
        }
      },
      deep: true
    }
  },
  created(){
    this.topic = window.localStorage.getItem('topic')
  }
}
</script>

<style lang="scss" scoped>
  .c-ChatComponent {

    .call-icon {
      padding: 1.5em;
      border: 2px solid black;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      cursor: pointer;
      transition: all 0.25s;

      svg{
        height: 4em;
        width: auto;
      }

      &__text {
        font-weight: 600;
        font-size: 2em;
      }

      &:hover {
        border-color: black;
        color: #fff;
        background-color: black;
      }
    }

    .overlay {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0,0,0,0.8);
      z-index: 3;
    }

    .chat {
      padding: 1.5em;
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      height: 90%;
      max-width: 1000px;
      background-color: #fff;
      z-index: 4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 2em;
      border: 1px solid black;

      &__close {
        text-align: right;
        margin-bottom: 1em;
        cursor: pointer;
        svg {
          height: 4em;
          width: auto;
          transition: all 0.25s;

          &:hover {
            color: orangered;
          }
        }
      }

      &__messages {
        margin-top: 1em;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        overflow-y: scroll;
        padding-right: 0.5em;
        height: 100%;

        &::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        &__message{
          padding: 1em;
          font-size: 1.6em;
          background-color: #100909;
          color: #fff;
          border-radius: 1em;
          margin-bottom: 0.5em;

          &--welcome {
            //background-color: #76868C;
          }

          &--user {
            align-self: flex-end;
            text-align: right;
            background-color: #fff;
            border: 1px solid black;
            color: black;
          }
        }
      }
    }

    .contact-form{
      padding-top: 2em;
      display: flex;
      &__input{
        padding: 5px;
        font-size: 1.8em;
        display: block;
        width: 100%;
        margin-right: -2px;
        resize: none;
        border-radius: 5px 0 0 5px;
      }

      &__button {
        font-size: 2em;
        padding: 0.5em 1.5em;
        display: block;
        border-radius: 0 5px 5px 0;
        border: none;
        color: #fff;
        background-color: #8C8C76;
      }
    }

  }
</style>