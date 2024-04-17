<template>

  <div class="navbar">
    <router-link class="link logo" to="/"><img src="../assets/navbar/image18.png" /></router-link>

    <div class="navbar__links">
      <router-link class="link" to="/">About Us</router-link>
      <router-link class="link" to="/">Forex Trading</router-link>
      <router-link class="link" to="/">Tools</router-link>
      <router-link class="link blue" to="/" >Partner With Us</router-link>
    </div>

    <div class="country">
      <img src="../assets/navbar/image%201.png" class="flag">
      <img src="../assets/navbar/image%202.png" class="arrow">
    </div>
    <button class="btn blue">Register</button>
    <button class="btn orange">Demo Account</button>
  </div>



</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar{
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  height: 110px;
}
.logo{
  width: 293px;
  margin-bottom: 10px;
  margin-left: 40px;
  cursor: pointer;
}
.navbar__links{
  margin-left: 45px;
  width: 470px;
  display: flex;
  justify-content: space-between;
  .link{
    color: #000;
    text-decoration: none;
  }
  .blue{
    color: #0165FF;
  }
}
.country{
  margin-left: 173px;
  margin-right: 30px;
  width: 52px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .arrow{
    width: 12px;
    height: 12px;
  }
  .flag{
    width: 34px;
    height: 34px;
  }
}
.btn{
  border-radius: 37px;
  padding: 15px 40px;
  color: #fff;
  border: none;
  font-size: 20px;
  font-weight: bold;
  &.blue{
    background-color: #0165FF;
  }
  &.orange{
    background-color: #F05B22;
    margin-left: 20px;
  }
}
</style>