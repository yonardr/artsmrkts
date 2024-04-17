<template>
  <div class="app">
<Message />
    <NavBar />
    <div>
      <img src="../src/assets/bg30%201.png" class="back__img">
    </div>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import Message from "./components/Message.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: {NavBar, Message}
})

</script>
<style>

.app{
  font-family: Roboto, serif;
  width: 1658px;

}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.back__img{
  width: 100%;
background: linear-gradient(to right, rgba(9, 5, 47, .85) 0%, rgba(49, 29, 94, .85) 100%);
}
</style>
