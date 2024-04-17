<template>
  <div class="app">

    <Message/>
    <NavBar/>
    <Main/>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import Message from "./components/Message.vue";
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";

export default defineComponent({
  components: {Main, NavBar, Message}
})

</script>
<style>

.app {
  font-family: Roboto, serif;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

._container {
  max-width: 1658px;
  margin: 0 auto;
}
</style>
