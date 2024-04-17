<template>
  <div>
    <div
        :style="{background: `linear-gradient(to right, rgb(64, 76, 115, .94) 0%, rgb(24, 39, 81, .71) 100%), url(${imagePath}) center no-repeat`, backgroundSize: '100% 100%' }"
        class="main">
      <div class="text">
        <div class="title">
          Trade with a broker Who
          is Fair and Reputable
        </div>
        <div class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </div>
      </div>
      <div class="card">
        <div class="title">
          Open New Account
        </div>
        <form @submit.prevent="send()">
          <input placeholder="Enter e-mail" required v-model="form.email.value" type="email"  />
          <input placeholder="Enter your full name" required v-model="form.fullName.value" type="text"/>
          <button class="btn" :class="activeBtn">Register</button>
        </form>
          <div class="horizontalLines">
            <div class="item"></div>
            <div class="description">Or register via</div>
            <div class="item"></div>
          </div>

        <div class="socialLinks">
          <img src="../assets/main/image%2015.png"/>
          <img src="../assets/main/image%2016.png"/>
          <img src="../assets/main/image%2017.png"/>
        </div>

        <div class="footer">
          <div>Already have an account? <a>Log In</a></div>
          <div>By registreting you agree to our <b>privacy policy</b></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePath from '../assets/main/bg30 1.png';
import {computed, reactive} from "vue";
import {useSendMail} from "./hooks/useSendMail.js";

export default {
  setup() {
    const form = reactive({
      email: {
        value : null
      },
      fullName: {
        value: null
      }
    })

    async function send(){
      const status = await useSendMail(form)
      if(status === 200) alert('Отправлено')
      form.email.value = null;
      form.fullName.value = null;
    }

    const activeBtn = computed(()=>{
        if(form.email.value && form.fullName.value){
          return 'active'
        }

    })

    return {imagePath, form, send, activeBtn}
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;

  .title {
    width: 745px;
    font-size: 68px;
    font-weight: bolder;
    margin-bottom: 30px;
  }

  .description {
    width: 705px;
    font-size: 24px;
    font-weight: normal;
  }
}
.card{
  width: 580px;
  height: 693px;
  background-color: #fff;
  border: 1px solid #A7A7A7;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px ;

  .title{
    margin-top: 68px;
    margin-bottom: 40px;
    color: #3F444A;
    font-size: 32px;
    font-weight: 500;
  }
}
input{
  width: 460px;
  height: 72px;
  border-radius: 6px;
  color: #959595;
  border: 1px solid #D6D6D6;
  padding: 25px 20px;
  font-family: Roboto,serif;
  font-size: 18px;
  margin-bottom: 28px;
}
.btn{
  border-radius: 59px;
  padding: 16px 185px;
  background-color: #0165FF;
  border: none;
  opacity: 0.35;
  font-family: Roboto,serif;
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
   &.active{
     opacity: 1;
     color: rgba(255, 255, 255, 1);
   }
}

.horizontalLines{
  width: 100%;
  display: flex;
  margin-top: 24px;
  .description{
    color:#959595;
    font-size: 18px;
    white-space: nowrap;
    margin: 0 18px;
  }
  .item{
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 8px;
  }

}
.socialLinks{
  margin-top: 34px;
  img{
    margin: 0 15px;
    width: 38px;
    height: 38px;
  }
}
.footer{
  margin-top: 29px;
  div{
    color: #959595;
    font-size: 16px;
    text-align: center;
    margin-top: 8px;
    a{
      color: #0165FF;
      font-weight:600 ;
    }
    b{
      font-weight: 500;
      color: #727272;
    }
  }
}
@media (max-width: 1600px) {
  .main {
    flex-direction: column;
  }
}
</style>